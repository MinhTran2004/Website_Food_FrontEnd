import AppButton from "@/component/Button/AppButton";
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
      <p className="text-xl font-semibold">
        {showmore && (
          <span className="text-[25px] mr-1.5 text-[#EC5708]">-20%</span>
        )}
        {title}
      </p>
      <p className="text-sm">{label}</p>
    </div>
  </div>
);

const HomeContent = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      {/* children 1 */}
      <div className="w-[55%]">
        <div className="flex items-center gap-5">
          <div className="h-[2px] w-[30px] bg-black" />
          <p>THỰC PHẨM THÁI</p>
        </div>
        <p className="text-[55px] font-semibold">
          Bản giao hưởng của gia vị và hương vị
        </p>
        <AppButton text="Thực đơn" />
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
