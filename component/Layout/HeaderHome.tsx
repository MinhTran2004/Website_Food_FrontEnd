import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { ROUTE } from "@/share/contanst/route.constants";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import Navbar from "../Navbar";

const HeaderHome = async () => {
  return (
    <header className="hidden lg:block w-screen bg-white">
      <div className="mx-auto grid grid-cols-3 justify-between items-center px-20 py-4">
        <Navbar />
        <Link href={ROUTE.HOME} className="flex justify-center">
          <AppImage
            classNameContainer="h-[80px] w-[80px]"
            src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
            alt=""
          />
        </Link>

        <div className="flex gap-4 justify-end">
          <Link href={ROUTE.CART}>
            <IoCartOutline className="text-[28px] hover:text-colorOrange" />
          </Link>
          <Link href={ROUTE.PERSONAL_INFO}>
            <AiOutlineUser className="text-[28px] hover:text-colorOrange" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
