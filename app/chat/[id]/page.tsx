"use client";

import { newMessage, sendMessage } from "@/config/socket/event/chat.event";
import { useSocket } from "@/config/socket/useSocket";
import { chatService } from "@/service/chat.service";
import { userService } from "@/service/user.service";
import { IMessage } from "@/types/interface/message.interface";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { notFound, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import HeaderChat from "./component/HeaderChat";
import MessengerChat from "./component/MessengerChat";
import SearchChat from "./component/SearchChat";
import SendChat from "./component/SendChat";
import UsersChat from "./component/UsersChat";
import { joinRoom, joinRoomFristChat } from "@/config/socket/event/room.event";
import { offSocket } from "@/config/socket/event";
import { SocketEvents } from "@/config/socket/type";

export default function ChatPage() {
  const { id } = useParams();
  const { data } = useSession();


  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [search, setSearch] = useState<string>("");

  const queryClient = useQueryClient();
  

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

  useSocket(data?.user.accessToken ?? "");

  // ================= SOCKET CONNECT =================
  useEffect(() => {
    newMessage((newMessage) => {
      setMessages((prev) => [...prev, newMessage]);
    });

    joinRoomFristChat((room) => {
      if (room._id) {
        const roomId = room._id;
        joinRoom(roomId);
        queryClient.setQueryData(["list-room-user"], refetch());
      }
    });

    return () => {
      offSocket(SocketEvents.NEW_MESSAGE);
      offSocket(SocketEvents.JOIN_ROOM_FRIST_CHAT);
    };
  }, [data]); // dependency rõ ràng hơn

  // ================= JOIN ROOM =================
  useEffect(() => {
    const roomId = listUserChat?.data?.room?._id;

    if (!id) return;

    if (!roomId) {
      joinRoom(id as string); // dùng tạm
      return;
    }

    joinRoom(roomId);
    setMessages(listUserChat?.data?.messages || []);

    return () => {
      offSocket(SocketEvents.JOIN_ROOM);
    };
  }, [listUserChat]);

  // ================= SEND MESSAGE =================
  const handleSendMessage = () => {
    if (!message.trim()) return;

    sendMessage({
      receiverId: id as string,
      message,
    });

    setMessage("");
  };

  
  return (
    <div className="h-screen flex">
      {/* LEFT CHAT */}
      <div className="w-xl border-r border-colorGray h-screen">
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
          onSend={handleSendMessage}
        />
      </div>
    </div>
  );
}
