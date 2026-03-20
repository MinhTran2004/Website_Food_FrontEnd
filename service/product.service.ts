import {
  IPagination,
  IResponse,
  IResponseListData,
} from "@/types/interface/api.interface";
import {
  IFilterGetListProduct,
  IProduct,
} from "@/types/interface/product.interface";
import HttpClient from "./index.service";
import { URLS } from "./url.service";

class ProductService {
  async getProductById({ id }: { id: string }): Promise<IProduct> {
    try {
      const response = await HttpClient.get<{ id: string }, IProduct>(
        URLS.GET_PRODUCT_BY_ID(id),
      );
      return response;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getAllProduct(
    params?: IFilterGetListProduct,
  ): Promise<IResponseListData<IProduct>> {
    try {
      const response = await HttpClient.get<
        IFilterGetListProduct,
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
