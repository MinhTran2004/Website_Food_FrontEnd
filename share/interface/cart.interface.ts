import { IProduct } from "./product.interface";

export interface ICart {
  _id: string;
  idUser: string;
  product: IProduct;
  quantity: number;
  isActive: boolean;
}

export interface IBodyPostCart {
  idProduct: string;
  quantity: number;
}

export interface IBodyPatchUpdatequantity {
  idCart: string;
  idProduct: string;
  quantity: number;
}
