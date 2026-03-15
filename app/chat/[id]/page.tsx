"use client";

import { chatService } from "@/service/chat.service";
import { IMessage } from "@/share/interface/message.interface";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
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

  const socketRef = useRef<Socket | null>(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  // ================= GET MESSAGE =================
  const { data: listUserChat } = useQuery({
    queryKey: ["list-user-chat", id],
    queryFn: () => chatService.getListMessageByIdReceiver(id as string),
    enabled: !!id,
  });

  // ================= SOCKET CONNECT =================
  useEffect(() => {
    if (!data?.user?.accessToken) return;

    const socket = io(process.env.NEXT_PUBLIC_API_URL, {
      auth: { token: data.user.accessToken },
    });

    socketRef.current = socket;

    // socket.on("connect", () => {
    //   console.log("Socket connected:", socket.id);
    // });

    socket.on("newMessage", (msg: IMessage) => {
      setMessages((prev) => [...prev, msg]);
    });

    // socket.on("connect_error", (err) => {
    //   console.error("Socket connect error:", err.message);
    // });

    return () => {
      socket.off("newMessage");
      socket.disconnect();
      socketRef.current = null;
    };
  }, [data]); // dependency rõ ràng hơn
  // ================= JOIN ROOM =================
  useEffect(() => {
    const roomId = listUserChat?.data?.room?._id;
    if (!roomId) return;

    const socket = socketRef.current;
    if (!socket) return;

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

  return (
    <div className="h-screen flex">
      {/* LEFT CHAT */}
      <div className="w-xl border-r h-full border-colorGray">
        <SearchChat />
        <UsersChat />
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
