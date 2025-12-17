import { IMAGE_SOUCE } from "@/public/assets/images";
import { ReactNode } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import AppImage from "../Image/AppImage";
import AppText from "../Text/AppText";
import { COLOR } from "@/share/contanst/color";

const ItemShowIcon = ({ icon }: { icon: ReactNode }) => (
  <div className="w-[40px] h-[40px] flex items-center justify-center p-1 rounded-full bg-[#f3e8d6] text-yellow-500 hover:bg-[#ec5708] hover:text-white">
    {icon}
  </div>
);

const AppProduct = () => {
  return (
    <div className="cursor-pointer group">
      <div className="h-[300px] relative">
        <AppImage
          classNameContainer="h-[270px]"
          src={IMAGE_SOUCE.IMG_DEMO_PRODUCT_1}
          className="object-cover hover:scale-105 duration-300"
          alt=""
        />

        <div
          className="flex justify-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-2
                  opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-400"
        >
          <ItemShowIcon
            icon={<CiHeart size={18} className="text-current " />}
          />
          <ItemShowIcon
            icon={<PiShoppingCartLight size={18} className="text-current" />}
          />
          <ItemShowIcon
            icon={<IoEyeOutline size={18} className="text-current" />}
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <AppText color={COLOR.gray} typo="BASE" text="Món chính, Đặc biệt" />
        <AppText text="Bánh mì cà ri" typo="HEADER_4_B" className="uppercase" />
        <div className="flex gap-0.5">
          <AppText color={COLOR.gray} typo="BASE" text="200,000" />
          <AppText color={COLOR.gray} typo="BASE" text="VND" />
        </div>

        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppProduct;
