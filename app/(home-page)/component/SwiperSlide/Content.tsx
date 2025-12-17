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
          <AppText
            text="-20%"
            typo="LARGE_MEDIUM_B"
            className="mr-1.5 text-[#EC5708]"
          />
        )}
        <AppText text={title} typo="LARGE_MEDIUM_B" />
      </div>
      <AppText text={label} typo="BASE" />
    </div>
  </div>
);

const HomeContent = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      {/* children 1 */}
      <div className="w-[60%]">
        <div className="flex items-center gap-5">
          <div className="h-[2px] w-[30px] bg-black" />
          <AppText text="THỰC PHẨM THÁI" typo="BASE" />
        </div>
        <AppText
          text="Bản giao hưởng của gia vị và hương vị"
          as={"h1"}
          typo="HEADER_1_B"
        />
        <AppButton text={{ text: "Thực đơn", typo: "LARGE_MEDIUM_B" }} />
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
