import { IMAGE_SOUCE } from "@/public/assets/images";
import AppImage from "../Image/AppImage";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";
import TextHoverUnderline from "../Text/TextHoverUnderline";
import { getCurrentPath } from "@/utils/getSeverUrl";

const HeaderMain = async () => {
  const currentPatch = await getCurrentPath();

  return (
    <header className="w-7xl mx-auto">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center gap-16">
          <AppImage
            src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK}
            classNameContainer="h-[96px] w-[96px] cursor-pointer"
            alt=""
          />

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
              status={currentPatch === "/product"}
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
        </div>

        <div className="flex gap-5">
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

export default HeaderMain;
