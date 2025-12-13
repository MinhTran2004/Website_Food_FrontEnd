import AppImage from "@/component/Image/AppImage";
import TextHoverUnderline from "@/component/Text/TextHoverUnderline";
import { IMAGE_SOUCE } from "@/public/assets/images";
import Link from "next/link";

const FooterCategory = () => {
  return (
    <div className="flex justify-between items-center py-5 border-b border-gray-400">
      <Link href={"#"}>
        <AppImage
          src={IMAGE_SOUCE.IMG_LOGO_APP_WHITE}
          classNameContainer="w-[86px] h-[86px] bg-white-500"
          alt=""
        />
      </Link>

      <div className="flex gap-5">
        <TextHoverUnderline
          href="#"
          text="Bài viết của chúng tôi"
          classNameText="text-white"
          classNameLine="bg-white"
        />
        <TextHoverUnderline
          href="#"
          text="Theo dõi đơn hàng của bạn"
          classNameText="text-white"
          classNameLine="bg-white"
        />
        <TextHoverUnderline
          href="#"
          text="Liên hệ"
          classNameText="text-white"
          classNameLine="bg-white"
        />
      </div>
    </div>
  );
};

export default FooterCategory;
