import {
  IAddress,
  IBodyPatchAddress,
  IBodyPostAddress,
} from "@/share/interface/address.interface";
import HttpClient from "./index.service";
import { URLS } from "./url.service";
import { IResponse, IResponseListData } from "@/share/interface/api.interface";

class AddressService {
  async createAddress(body: IBodyPostAddress): Promise<IResponse<IAddress>> {
    try {
      const response = await HttpClient.post<
        IBodyPostAddress,
        IResponse<IAddress>
      >(URLS.ADDRESS, body);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getListAddress(
    params?: IIRFilterOptions,
  ): Promise<IResponseListData<IAddress>> {
    try {
      const response = await HttpClient.get<
        IIRFilterOptions,
        IResponseListData<IAddress>
      >(URLS.GET_LIST_ADDRESS, { params: params });
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async patchAddress(body: IBodyPatchAddress): Promise<IResponse<IAddress>> {
    try {
      const response = await HttpClient.patch<
        IBodyPatchAddress,
        IResponse<IAddress>
      >(URLS.ADDRESS, body);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const addressService = new AddressService();
