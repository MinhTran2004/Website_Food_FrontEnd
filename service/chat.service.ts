import { IResponse, IResponseListData } from "@/share/interface/api.interface";
import {
  IMessageFirstRoom,
  IRoomAndMessages
} from "@/share/interface/message.interface";
import HttpClient from "./index.service";
import { URLS } from "./url.service";

class ChatService {
  async getListRoomUser(): Promise<IResponseListData<IMessageFirstRoom>> {
    try {
      const response = await HttpClient.get<
        IResponseListData<IMessageFirstRoom>
      >(URLS.GET_LIST_ROOM_USER);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getListMessageByIdReceiver(
    idReceiver: string,
  ): Promise<IResponse<IRoomAndMessages>> {
    const url = URLS.GET_LIST_MESSAGE_ID_RECEIVER(idReceiver);
    try {
      const response = await HttpClient.get<
        string,
        IResponse<IRoomAndMessages>
      >(url);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const chatService = new ChatService();
