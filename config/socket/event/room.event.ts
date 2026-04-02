import { IRoom } from "@/types/interface/message.interface";
import { getSocket } from ".";
import { SocketEvents } from "../type";

export const joinRoom = (roomId: string) => {
  const socket = getSocket();
  socket?.emit(SocketEvents.JOIN_ROOM, roomId);
};

export const joinRoomFristChat = (callback: (room: IRoom) => void) => {
  const socket = getSocket();
  socket?.on(SocketEvents.JOIN_ROOM_FRIST_CHAT, callback);
};
