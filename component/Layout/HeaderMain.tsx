import { IMAGE_SOUCE } from "@/public/assets/images";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
import AppImage from "../Image/AppImage";
import Navbar from "../Navbar";

const HeaderMain = async () => {
  return (
    <header className="hidden lg:block mx-auto max-w-7xl">
      <div className="max-w-7xl mx-auto grid grid-cols-3 justify-between items-center px-6 py-4">
        <Navbar />
        <Link href={"/"} className="flex justify-center">
          <AppImage
            classNameContainer="h-[80px] w-[80px]"
            src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
            alt=""
          />
        </Link>

        <Link href={"#"} className="flex justify-end">
          <CiUser className="text-4xl hover:text-white" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderMain;
