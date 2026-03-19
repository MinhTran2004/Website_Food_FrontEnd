import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { ROUTE } from "@/types/contanst/route.constants";
import Link from "next/link";
import Navbar from "../Navbar";

const HeaderHome = async () => {
  return (
    <header className="hidden md:block w-screen bg-white shadow-md">
      <div className="mx-auto max-w-7xl flex justify-between items-center py-4 px-6">
        <Link href={ROUTE.HOME} className="flex justify-center">
          <AppImage
            classNameContainer="h-[60px] w-[60px]"
            src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
            alt={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
          />
        </Link>

        <Navbar />
      </div>
    </header>
  );
};

export default HeaderHome;
