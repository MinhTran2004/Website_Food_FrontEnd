import {
  IPagination,
  IResponse,
  IResponseListData,
} from "@/share/interface/api.interface";
import { IProduct } from "@/share/interface/product.interface";
import HttpClient from "./index.service";
import { URLS } from "./url.service";

class ProductService {
  async getProductById({ id }: { id: string }): Promise<IResponse<IProduct>> {
    try {
      const response = await HttpClient.get<
        { id: string },
        IResponse<IProduct>
      >(URLS.GET_PRODUCT_BY_ID(id));
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getAllProduct(
    params?: IPagination
  ): Promise<IResponseListData<IProduct>> {
    try {
      const response = await HttpClient.get<
        IPagination,
        IResponseListData<IProduct>
      >(URLS.GET_LIST_PRODUCT, {
        params: params,
      });
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export const productService = new ProductService();
