import { IMAGE_SOUCE } from "@/public/assets/images";
import { NAME_ROUTE_HOME, ROUTE } from "@/types/contanst/route.constants";
import { getCurrentPath } from "@/utils/getSeverUrl";
import clsx from "clsx";
import Link from "next/link";
import AppDrawer from "../AppDrawer";
import AppImage from "../Image/AppImage";
import TextHoverUnderline from "../Text/TextHoverUnderline";

const HeaderHomeMobile = async () => {
  const pathName = await getCurrentPath();
  return (
    <div className="md:hidden w-screen flex justify-between items-center px-6 py-4">
      <Link href={`${ROUTE.PERSONAL_INFO}`} className="flex justify-center">
        <AppImage
          classNameContainer="h-[60px] w-[60px]"
          src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
          alt=""
        />
      </Link>

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
  );
};

export default HeaderHomeMobile;
