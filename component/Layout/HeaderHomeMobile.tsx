import { IMAGE_SOUCE } from "@/public/assets/images";
import { NAME_ROUTE_HOME, ROUTE } from "@/share/contanst/route.constants";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import AppDrawer from "../AppDrawer";
import AppImage from "../Image/AppImage";
import clsx from "clsx";
import { getCurrentPath } from "@/utils/getSeverUrl";
import TextHoverUnderline from "../Text/TextHoverUnderline";
import { AiOutlineUser } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

const HeaderHomeMobile = async () => {
  const pathName = await getCurrentPath();
  return (
    <div className="lg:hidden w-screen grid grid-cols-3 justify-between items-center px-6 py-4">
      <div className="flex">
        <AppDrawer
          title="Menu"
          body={
            <div className="p-4 space-y-4">
              {NAME_ROUTE_HOME.map((item) => (
                <TextHoverUnderline
                  key={item.href}
                  href={item.href}
                  text={item.text}
                  classNameText={clsx(
                    `py-2 text-xl uppercase hover:text-colorOrange`,
                    pathName === item.href && "text-colorOrange",
                  )}
                />
              ))}
            </div>
          }
        />
      </div>
      <Link href={`${ROUTE.PERSONAL_INFO}`} className="flex justify-center">
        <AppImage
          classNameContainer="h-[60px] w-[60px]"
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
  );
};

export default HeaderHomeMobile;
