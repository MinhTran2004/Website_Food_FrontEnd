import {
  IPagination,
  IResponse,
  IResponseListData,
} from "@/share/interface/api.interface";
import {
  IBodyPatchUpdatequantity,
  IBodyPostCart,
  ICart,
} from "@/share/interface/cart.interface";
import HttpClient from "./index.service";
import { URLS } from "./url.service";

export class CartService {
  async createCart(body: IBodyPostCart): Promise<IResponse<ICart>> {
    try {
      const response = await HttpClient.post<IBodyPostCart, IResponse<ICart>>(
        URLS.CART,
        body,
      );
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getListCart(params?: IPagination): Promise<IResponseListData<ICart>> {
    try {
      const response = await HttpClient.get<
        IBodyPostCart,
        IResponseListData<ICart>
      >(URLS.GET_LIST_CART, { params: params });
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async patchQuantityCart(
    body: IBodyPatchUpdatequantity,
  ): Promise<IResponse<ICart>> {
    try {
      const response = await HttpClient.patch<
        IBodyPatchUpdatequantity,
        IResponse<ICart>
      >(URLS.PATCH_QUANTITY_CART, body);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async deleteCart(idCart: string): Promise<IResponse<ICart>> {
    const url = URLS.DELETE_CART(idCart);
    try {
      const response = await HttpClient.delete<string, IResponse<ICart>>(url);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const cartService = new CartService();
