import { IPagination } from "./api.interface";

export interface IProduct {
  _id: string;
  name: string;
  price: number;
  discount: number;
  description: string;
  image: string;
  category: TYPE_CATEGORY;
  total_star: number;
  rates: {
    star1: number;
    star2: number;
    star3: number;
    star4: number;
    star5: number;
  };
  isActive: boolean;
}

export interface IFilterGetListProduct extends IPagination {
  category: TYPE_CATEGORY;
}

export type TYPE_CATEGORY = "MAIN_COURES" | "DESSERT" | "APPETIZER";
