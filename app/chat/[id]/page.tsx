"use client";

import { chatService } from "@/service/chat.service";
import { userService } from "@/service/user.service";
import {
  IMessage,
  IMessageFirstRoom,
  IRoom,
} from "@/types/interface/message.interface";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { notFound, useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import HeaderChat from "./component/HeaderChat";
import MessengerChat from "./component/MessengerChat";
import SearchChat from "./component/SearchChat";
import SendChat from "./component/SendChat";
import UsersChat from "./component/UsersChat";

export default function ChatPage() {
  const { data } = useSession();
  const { id } = useParams();

  const queryClient = useQueryClient();
  const socketRef = useRef<Socket | null>(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [search, setSearch] = useState<string>("");

  //check user receiver
  const { data: user, isSuccess } = useQuery({
    queryKey: ["get-user-receiver-by-id", id],
    queryFn: () => userService.getUserById(id as string),
  });
  if (!user && isSuccess) return notFound();

  // get list user by username
  const { data: dataSearch } = useQuery({
    queryKey: ["get-list-user-by-username", search],
    queryFn: () => userService.getListUserByUserName({ userName: search }),
    enabled: !!search,
  });

  //list room
  const { data: listRoom, refetch } = useQuery({
    queryKey: ["list-room-user", data?.user.accessToken],
    queryFn: () => chatService.getListRoomUser(),
  });
  const rooms = listRoom?.data?.items || [];

  // ================= GET MESSAGE =================
  const { data: listUserChat } = useQuery({
    queryKey: ["list-user-chat", id],
    queryFn: () => chatService.getListMessageByIdReceiver(id as string),
  });

  // ================= SOCKET CONNECT =================
  useEffect(() => {
    if (!data?.user?.accessToken) return;

    const socket = io(process.env.NEXT_PUBLIC_API_URL, {
      auth: { token: data.user.accessToken },
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("newMessage", (msg: IMessage) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("connect_error", (err) => {
      console.error("Socket connect error:", err.message);
    });

    socket.on("reloadRooms", (room: IRoom) => {
      const roomId = room._id;

      //khi chay lại sẽ rời khỏi phòng idReceiver vì chưa có roomID
      socket.emit("joinRoom", roomId);

      queryClient.setQueryData(["list-room-user"], refetch());
    });

    return () => {
      socket.off("newMessage");
      socket.off("reloadRooms");
      socket.disconnect();
      socketRef.current = null;
    };
  }, [data]); // dependency rõ ràng hơn

  // ================= JOIN ROOM =================
  useEffect(() => {
    const roomId = listUserChat?.data?.room?._id;
    const socket = socketRef.current;

    if (!socket) return;

    if (!roomId) {
      socket.emit("joinRoom", id); // dùng tạm
      return;
    }

    if (!roomId) return;

    // Đợi socket connect rồi mới join
    const joinRoom = () => {
      socket.emit("joinRoom", roomId);
    };

    if (socket.connected) {
      joinRoom();
    } else {
      socket.once("connect", joinRoom); // chờ connect xong mới join
    }

    setMessages(listUserChat?.data?.messages || []);

    return () => {
      // Cleanup: leave room cũ khi đổi room
      socket.emit("leaveRoom", roomId);
      socket.off("connect", joinRoom);
    };
  }, [listUserChat]);

  // ================= SEND MESSAGE =================
  const sendMessage = () => {
    if (!message.trim()) return;
    if (!socketRef.current) return;
    socketRef.current.emit("sendMessage", {
      receiverId: id,
      message,
    });

    setMessage("");
  };

  if (!id) return null;
  // border-colorGray
  return (
    <div className="h-screen flex">
      {/* LEFT CHAT */}
      <div className="w-xl border-r h-screen">
        <SearchChat
          data={dataSearch?.data?.items || []}
          setSearch={setSearch}
        />
        <UsersChat rooms={rooms} />
      </div>

      {/* RIGHT CHAT */}
      <div className="w-full flex flex-col">
        {listUserChat?.data?.user && (
          <HeaderChat {...listUserChat?.data?.user} />
        )}
        <MessengerChat receiverId={id as string} messages={messages} />
        <SendChat
          value={message}
          onMessage={(text) => setMessage(text)}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
}
