import AppButton from "@/component/Button/AppButton";
import AppText from "@/component/Text/AppText";
import { IMAGE_SOUCE } from "@/public/assets/images";
import Image from "next/image";

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
    <div className="max-w-7xl mx-auto mt-20 px-14">
      {/* children 1 */}
      <div className="w-[60%]">
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-7 bg-black" />
          <AppText text="THỰC PHẨM THÁI" typo="TEXT_LG" />
        </div>
        <h1 className="pb-8 pt-4 text-6xl font-semibold">
          Bản giao hưởng của gia vị và hương vị
        </h1>
        <AppButton
          text={{
            children: "Thực đơn",
            className: "text-lg font-semibold text-white",
          }}
        />
      </div>

      {/* children 2 */}
      <div className="flex gap-4 mt-14">
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
