import { IMAGE_SOUCE } from "@/public/assets/images";
import { NAME_ROUTE_HOME } from "@/share/contanst/route.constants";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import AppDrawer from "../AppDrawer";
import AppImage from "../Image/AppImage";
import clsx from "clsx";
import { getCurrentPath } from "@/utils/getSeverUrl";
import TextHoverUnderline from "../Text/TextHoverUnderline";

const HeaderHomeMobile = async () => {
    const pathName = await getCurrentPath();
    return (
        <div className="lg:hidden w-screen flex justify-between items-center px-6 py-4">
            <AppDrawer
                title="Menu"
                body={<div className="p-4">
                    {NAME_ROUTE_HOME.map((item) => (
                        <TextHoverUnderline key={item.href} href={item.href} text={item.text} classNameText={clsx(`py-2 text-sm uppercase hover:text-colorOrange`, pathName === item.href && 'text-colorOrange')} />
                    ))}</div>}
            />
            <Link href={"/"} className="flex justify-center">
                <AppImage
                    classNameContainer="h-[60px] w-[60px]"
                    src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
                    alt=""
                />
            </Link>

            <Link href={"#"} className="flex justify-end">
                <CiUser className="text-4xl hover:text-white" size={26} />
            </Link>
        </div>
    )
}

export default HeaderHomeMobile;