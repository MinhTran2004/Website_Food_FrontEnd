import AppImage from "@/component/Image/AppImage";
import TextHoverUnderline from "@/component/Text/TextHoverUnderline";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { COLOR } from "@/share/contanst/color";
import Link from "next/link";

const FooterCategory = () => {
  return (
    <div className="flex justify-between items-center py-5 border-b border-gray-400">
      <Link href={"#"}>
        <AppImage
          src={IMAGE_SOUCE.IMG_LOGO_APP_WHITE}
          classNameContainer="w-[90px] h-[90px] bg-white-500"
          alt=""
        />
      </Link>

      <div className="flex gap-5">
        <TextHoverUnderline
          href="#"
          text={{
            text: "Bài viết của chúng tôi",
            color: COLOR.white,
            typo: "BASE",
          }}
          classNameLine="bg-white"
        />
        <TextHoverUnderline
          href="#"
          text={{
            text: "Theo dõi đơn hàng của bạn",
            color: COLOR.white,
            typo: "BASE",
          }}
          classNameLine="bg-white"
        />
        <TextHoverUnderline
          href="#"
          text={{ text: "Liên hệ", color: COLOR.white, typo: "BASE" }}
          classNameLine="bg-white"
        />
      </div>
    </div>
  );
};

export default FooterCategory;
