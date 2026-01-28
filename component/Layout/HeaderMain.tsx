import { IMAGE_SOUCE } from "@/public/assets/images";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
import AppImage from "../Image/AppImage";
import Navbar from "../Navbar";

const HeaderMain = async () => {
  return (
    <header className="mx-auto max-w-7xl">
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-16 items-center">
          <AppImage
            src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
            classNameContainer="h-[96px] w-[96px] cursor-pointer"
            alt=""
          />

          <Navbar />
        </div>

        <div className="flex gap-5">
          <Link href={"#"}>
            <CiSearch className="text-3xl hover:text-white" />
          </Link>
          <Link href={"#"}>
            <CiHeart className="text-3xl hover:text-white" />
          </Link>
          <Link href={"#"}>
            <CiShoppingBasket className="text-3xl hover:text-white" />
          </Link>
          <Link href={"#"}>
            <CiUser className="text-3xl hover:text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
