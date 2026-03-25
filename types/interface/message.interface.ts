import { IUser } from "./user.interface";

export interface IMessage {
  _id: string;
  roomId: string;
  senderId: string;
  message: string;
  isActive: boolean;
  createdAt: Date;
}

export interface IRoom {
  _id?: string;
  members: string[];
  isActive: boolean;
}

export interface IMessageFirstRoom {
  user: IUser,
  message: IMessage,
}

export interface IRoomAndMessages {
  user: IUser,
  messages: IMessage[],
  room: IRoom,
}
