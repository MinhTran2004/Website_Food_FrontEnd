import AppDrawer from "@/component/AppDrawer";
import ProductCategory from "@/component/Category";
import LayoutSpace from "@/component/LayoutSpace";
import AppProduct from "@/component/Product/AppProduct.tsx";
import { ApiServerURL } from "@/service/index.service";
import { URLS } from "@/service/url.service";
import {
  FILTER_PRICE,
  TYPE_CATEGORY,
  TYPE_CATEGORY_PRODUCT
} from "@/types/contanst/product.constants";
import { IProduct } from "@/types/interface/product.interface";
import { Metadata } from "next";
import { RiFilter2Fill } from "react-icons/ri";
import ProductPrice from "./component/Filter/Price";
import ProductStatus from "./component/Filter/Status";

export const metadata: Metadata = {
  title: "Tìm kiếm đồ ăn giao nhanh",
  description: "Tìm kiếm đồ ăn giao hàng nhanh chóng, tiện lợi.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; price: FILTER_PRICE }>;
}) {
  const { category, price } = await searchParams;

  const data = await fetch(
    `${ApiServerURL}${URLS.GET_LIST_PRODUCT}?category=${category || TYPE_CATEGORY[0]}&price=${price}`,
    {
      method: "GET",
    },
  ).then((res) => res.json());

  return (
    <LayoutSpace>
      <div className="lg:hidden">
        {/* mobile */}
        <AppDrawer
          open={
            <div className="flex items-center gap-0.5 ml-4 mb-2">
              <RiFilter2Fill size={20} />
              <p>Bộ lọc</p>
            </div>
          }
          title="Bộ lọc"
          body={
            <div className="p-4 space-y-4 h-fit">
              <ProductCategory category={category} price={price} />
              <ProductPrice category={category} price={price} />
              <ProductStatus />
            </div>
          }
        />
      </div>

      {/* web */}
      <div className="flex mx-auto max-w-7xl">
        <div className="hidden lg:block w-[30%] px-4 space-y-4 h-fit">
          <ProductCategory category={category} price={price} />
          <ProductPrice category={category} price={price} />
          <ProductStatus />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {Array.isArray(data.data.items) &&
            data.data.items.map((item: IProduct) => (
              <AppProduct key={item._id} {...item} />
            ))}
        </div>
      </div>
    </LayoutSpace>
  );
}
