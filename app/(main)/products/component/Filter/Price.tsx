import AppLine from "@/component/AppLine";
import AppButton from "@/component/Button/AppButton";
import AppCheckBoxSSR from "@/component/CheckBox/AppCheckBoxSRR";
import {
  FILTER_PRICE,
  TYPE_FILTER_PRICE,
} from "@/share/contanst/product.constants";
import { ROUTE } from "@/share/contanst/route.constants";
import Link from "next/link";
import React from "react";

interface IProps {
  category?: string;
  price?: FILTER_PRICE;
}

const ProductPrice: React.FC<IProps> = async ({ category, price }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-medium">GIÁ SẢN PHẨM</h3>
        {price && (
          <Link
            href={{
              pathname: ROUTE.PRODUCTS,
              query: { category: category },
            }}
          >
            <AppButton
              buttonDefault
              text={{
                children: "Xóa",
                className: "text-colorOrange",
              }}
            />
          </Link>
        )}
      </div>
      <AppLine className="my-2 bg-gray-200" />

      <div>
        {TYPE_FILTER_PRICE.map((item) => (
          <Link
            key={item.value}
            href={{
              pathname: ROUTE.PRODUCTS,
              query: { category: category, price: item.value },
            }}
          >
            <AppCheckBoxSSR
              key={item.value}
              label={{ children: item.label }}
              checked={item.value === price}
              size="sm"
              className="py-2"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductPrice;
