import AppDrawer from "@/component/AppDrawer";
import ProductCategory from "@/component/Category";
import PathLink from "@/component/PathLink";
import { ApiServerURL } from "@/service/index.service";
import { URLS } from "@/service/url.service";
import {
  FILTER_PRICE,
  TYPE_CATEGORY,
} from "@/share/contanst/product.constants";
import { notFound } from "next/navigation";
import { RiFilter2Fill } from "react-icons/ri";
import ProductPrice from "./component/Filter/Price";
import ProductStatus from "./component/Filter/Status";
import AppProduct from "@/component/Product";
import { IProduct } from "@/share/interface/product.interface";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; price: FILTER_PRICE }>;
}) {
  const { category, price } = await searchParams;

  if (!category || !TYPE_CATEGORY.includes(category)) {
    notFound();
  }

  const data = await fetch(
    `${ApiServerURL}${URLS.GET_LIST_PRODUCT}?category=${category}&price=${price}`,
    {
      method: "GET",
    },
  ).then((res) => res.json());

  return (
    <div>
      <PathLink />
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
    </div>
  );
}
