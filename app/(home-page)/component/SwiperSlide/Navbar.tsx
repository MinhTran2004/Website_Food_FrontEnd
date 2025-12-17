import AppImage from "@/component/Image/AppImage";
import TextHoverUnderline from "@/component/Text/TextHoverUnderline";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { getCurrentPath } from "@/utils/getSeverUrl";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";

const HomeNavbar = async () => {
  const currentPatch = await getCurrentPath();

  return (
    <header className="w-screen">
      <div className="grid grid-cols-3 px-20 justify-between items-center py-4">
        <div className="flex gap-5">
          <TextHoverUnderline
            href="#"
            text={{ text: "TRANG CHỦ", typo: "BASE_B" }}
            status={currentPatch === "/"}
          />
          <TextHoverUnderline
            href="#"
            text={{ text: "KHUYẾN MÃI", typo: "BASE_B" }}
            status={currentPatch === "/a"}
          />
          <TextHoverUnderline
            href="#"
            text={{ text: "ĐỒ ĂN", typo: "BASE_B" }}
            status={currentPatch === "/b"}
          />
          <TextHoverUnderline
            href="#"
            text={{ text: "TIN TỨC", typo: "BASE_B" }}
            status={currentPatch === "/c"}
          />
          <TextHoverUnderline
            href="#"
            text={{ text: "LIÊN HỆ", typo: "BASE_B" }}
            status={currentPatch === "/d"}
          />
        </div>

        <div className="flex justify-center">
          <Link href={"#"}>
            <AppImage
              classNameContainer="h-[90px] w-[90px]"
              src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
              alt=""
            />
          </Link>
        </div>

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
