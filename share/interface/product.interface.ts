export interface IProduct {
  id: string;
  name: string;
  price: number;
  discount: number;
  description: string;
  description_detail: string;
  image: string;
  category_id: string;
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
