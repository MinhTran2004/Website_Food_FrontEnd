import AppImage from "@/component/Image/AppImage";
import TextHoverUnderline from "@/component/Text/TextHoverUnderline";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { ROUTE } from "@/types/contanst/route.constants";
import Link from "next/link";

const FooterCategory = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center py-5 border-b border-colorGray gap-8">
      <Link href={ROUTE.HOME} className="flex justify-center">
        <AppImage
          src={IMAGE_SOUCE.LOGO}
          classNameContainer="w-[90px] h-[90px] bg-white-500"
          alt=""
        />
      </Link>

      <div className="flex gap-5 flex-wrap">
        <TextHoverUnderline
          href={ROUTE.NEWS}
          text="Bài viết của chúng tôi"
          classNameLine="bg-white"
          classNameText="text-white"
        />
        <TextHoverUnderline
          href={ROUTE.ORDER_HISTORY}
          text="Theo dõi đơn hàng của bạn"
          classNameText="text-white"
          classNameLine="bg-white"
        />
        <TextHoverUnderline
          href={ROUTE.CONTACT}
          text="Liên hệ"
          classNameLine="bg-white"
          classNameText="text-white"
        />
      </div>
    </div>
  );
};

export default FooterCategory;
