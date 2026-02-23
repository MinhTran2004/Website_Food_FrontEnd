import {
  IBodyPostPaymentMethodCod,
  IOrder,
} from "@/share/interface/order.interface";
import HttpClient from "./index.service";
import { URLS } from "./url.service";
import {
  IPagination,
  IResponse,
  IResponseListData,
} from "@/share/interface/api.interface";

export class OrderService {
  async paymentMethodCod(
    body: IBodyPostPaymentMethodCod,
  ): Promise<IResponse<IOrder>> {
    try {
      const response = await HttpClient.post<
        IBodyPostPaymentMethodCod,
        IResponse<IOrder>
      >(URLS.PAYMENT_METHOD_COD, body);
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getListOrder(options?: IPagination): Promise<IResponseListData<IOrder>> {
    try {
      const response = await HttpClient.get<
        IPagination,
        IResponseListData<IOrder>
      >(URLS.GET_LIST_ORDER, {
        params: options,
      });
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}

export const orderService = new OrderService();
