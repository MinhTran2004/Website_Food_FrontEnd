import { IAddress } from "./address.interface";
import { ICart } from "./cart.interface";

export type METHOD_PAYMENT = "COD" | "VNPAY";
export type STATUS_ORDER = "prepare" | "delivery" | "Success" | "Failure";

export interface IOrder {
  _id: string;
  products: ICart[];
  address: IAddress;
  total: number;
  method: METHOD_PAYMENT;
  status: STATUS_ORDER;
  updatedAt: string;
  createdAt: string;
}

export interface IBodyPostPaymentMethodCod {
  products: ICart[];
  address: IAddress;
  total: number;
  paymentMethods: METHOD_PAYMENT;
}
