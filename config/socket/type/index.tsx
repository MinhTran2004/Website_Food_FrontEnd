import { IMessage } from "@/types/interface/message.interface";

export const SocketEvents = {
  //socket
  CONNECT: "connect",

  // message
  SEND_MESSAGE: "chat:send",
  NEW_MESSAGE: "chat:new",

  //room
  JOIN_ROOM: "room:join",
  JOIN_ROOM_FRIST_CHAT: "room:joinFristChat",
};

//message
export interface ISendMessage {
  receiverId: string;
  message: string;
}

export interface IReceiveMessage extends IMessage {}
