import { IMAGE_SOUCE } from "@/public/assets/images";
import { ReactNode } from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import AppImage from "../Image/AppImage";

const ItemShowIcon = ({ icon }: { icon: ReactNode }) => (
  <div className="w-[40px] h-[40px] flex items-center justify-center p-1 rounded-full bg-[#f3e8d6] text-yellow-500 hover:bg-colorOrange hover:text-white">
    {icon}
  </div>
);

const AppProduct = () => {
  return (
    <div className="cursor-pointer group">
      <div className="h-[270px] relative">
        <AppImage
          classNameContainer="h-full"
          src={IMAGE_SOUCE.IMG_DEMO_PRODUCT_1}
          className="object-contain hover:scale-105 duration-300"
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

      <div className="flex flex-col items-center space-y-1">
        <p className="text-base text-colorGray">Món chính, Đặc biệt</p>
        <p className="text-2xl font-medium uppercase">Bánh mì cà ri</p>
        <div className="flex gap-0.5">
          <p className="text-base text-colorGray">200,000</p>
          <p className="text-base text-colorGray">VND</p>
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
