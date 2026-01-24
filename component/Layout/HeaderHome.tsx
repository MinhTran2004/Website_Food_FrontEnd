import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import Navbar from "../Navbar";

const HeaderHome = async () => {

  return (
    <header className="w-screen">
      <div className="grid grid-cols-3 justify-between items-center px-20 py-4">
        <Navbar />
        <Link href={"/"} className="flex justify-center">
          <AppImage
            classNameContainer="h-[90px] w-[90px]"
            src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
            alt=""
          />
        </Link>

        <Link href={"#"}>
          <CiUser className="text-4xl hover:text-white" />
        </Link>
      </div>
    </header>
  );
};

export default HeaderHome;
