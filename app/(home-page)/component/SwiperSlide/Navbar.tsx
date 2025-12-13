import TextHoverUnderline from "@/component/Text/TextHoverUnderline";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { getCurrentPath } from "@/utils/getSeverUrl";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";

const HomeNavbar = async () => {
  const currentPatch = await getCurrentPath();

  return (
    <header className="w-screen">
      <div className="grid grid-cols-3 px-20 justify-between items-center py-4">
        <div className="flex gap-5">
          <TextHoverUnderline href="#" text="TRANG CHỦ" status={currentPatch === "/"} />
          <TextHoverUnderline href="#" text="KHUYẾN MÃI" status={currentPatch === "/a"} />
          <TextHoverUnderline href="#" text="ĐỒ ĂN" status={currentPatch === "/b"} />
          <TextHoverUnderline href="#" text="TIN TỨC" status={currentPatch === "/c"} />
          <TextHoverUnderline href="#" text="LIÊN HỆ" status={currentPatch === "/d"} />
        </div>

        <Link href={"#"} className="flex justify-center">
          <Image src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK} width={86} height={86} alt="" />
        </Link>

        <div className="flex gap-5 justify-end">
          <Link href={"#"}>
            <CiSearch className="text-3xl hover:text-white " />
          </Link>
          <Link href={"#"}>
            <CiHeart className="text-3xl hover:text-white " />
          </Link>
          <Link href={"#"}>
            <CiShoppingBasket className="text-3xl hover:text-white " />
          </Link>
          <Link href={"#"}>
            <CiUser className="text-3xl hover:text-white " />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
