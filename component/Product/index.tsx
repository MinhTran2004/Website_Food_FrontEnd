import { ROUTE } from "@/share/contanst/route.constants";
import { IProduct } from "@/share/interface/product.interface";
import { formatVND } from "@/utils/formatVND";
import Link from "next/link";
import { ReactNode } from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import AppImage from "../Image/AppImage";
import AppStar from "../RateProduct/AppStar";
import { TYPE_CATEGORY_PRODUCT } from "@/share/contanst/product.constants";

const ItemShowIcon = ({ icon }: { icon: ReactNode }) => (
  <div className="w-[40px] h-[40px] flex items-center justify-center p-1 rounded-full bg-[#f3e8d6] text-yellow-500 hover:bg-colorOrange hover:text-white">
    {icon}
  </div>
);

const AppProduct: React.FC<IProduct> = (props) => {
  return (
    <Link href={ROUTE.PRODUCTID(props._id)} className="cursor-pointer group">
      <div className="relative">
        <AppImage
          classNameContainer="h-[170px] sm:h-[270px]"
          src={props.image}
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
        <p className="text-base text-colorGray">
          {TYPE_CATEGORY_PRODUCT[props.category]}
        </p>
        <p className="text-2xl font-medium uppercase">{props.name}</p>
        <p className="text-base text-colorGray">{formatVND(props.price)}</p>

        <AppStar />
      </div>
    </Link>
  );
};

export default AppProduct;
