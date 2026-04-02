import { IMessage } from "@/types/interface/message.interface";
import { getSocket } from ".";
import { ISendMessage, SocketEvents } from "../type";

export const sendMessage = (data: ISendMessage) => {
  const socket = getSocket();
  socket?.emit(SocketEvents.SEND_MESSAGE, data);
};

export const newMessage = (callback: (newMessage: IMessage) => void) => {
  const socket = getSocket();
  socket?.on(SocketEvents.NEW_MESSAGE, callback);
};
