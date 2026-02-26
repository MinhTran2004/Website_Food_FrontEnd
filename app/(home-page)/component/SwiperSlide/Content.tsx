import AppButton from "@/component/Button/AppButton";
import { IMAGE_SOUCE } from "@/public/assets/images";
import {
  TYPE_CATEGORY,
  TYPE_CATEGORY_PRODUCT,
} from "@/share/contanst/product.constants";
import { ROUTE } from "@/share/contanst/route.constants";
import Image from "next/image";
import Link from "next/link";

const ItemSaleContent = ({
  image,
  title,
  label,
  showmore,
}: {
  image: string;
  title: string;
  label: string;
  showmore?: boolean;
}) => (
  <div className="flex p-5 bg-white gap-[10px]">
    <Image src={image} alt="" height={60} width={60} />
    <div className="space-y-1">
      <div className="flex">
        {showmore && (
          <p className="mr-1.5 text-colorOrange text-xl font-medium">-20%</p>
        )}
        <p className="text-xl font-medium">{title}</p>
      </div>
      <p className="text-base">{label}</p>
    </div>
  </div>
);

const HomeContent = () => {
  return (
    <div className="w-full mx-auto mt-15 px-8 lg:mt-20 sm:max-w-7xl sm:px-14 space-y-4">
      {/* children 1 */}
      <div className="sm:max-w-xl flex flex-col items-start space-y-2">
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-7 bg-black" />
          <p>THỰC PHẨM THÁI</p>
        </div>
        <h1 className="text-[36px] md:text-[40px] xl:text-[55px] leading-[40px] xl:leading-[60px] font-semibold pb-3">
          Bản giao hưởng của gia vị và hương vị
        </h1>
        <Link
          href={{
            pathname: ROUTE.PRODUCTS,
            query: { category: TYPE_CATEGORY[0] },
          }}
        >
          <AppButton
            text={{
              children: "Thực đơn",
              className: "text-lg font-semibold text-white",
            }}
          />
        </Link>
      </div>

      {/* children 2 */}
      <div className="hidden md:flex lg:mt-20 gap-4">
        <ItemSaleContent
          image={IMAGE_SOUCE.ICON_SALE_CONTENT_1}
          title="Giao hàng miễn phí"
          label="Sed do eiusmod tạm thời"
        />
        <ItemSaleContent
          image={IMAGE_SOUCE.ICON_SALE_CONTENT_2}
          title="Thực đơn ăn chay"
          label="Sed do eiusmod tạm thời"
          showmore
        />
      </div>
    </div>
  );
};

export default HomeContent;
