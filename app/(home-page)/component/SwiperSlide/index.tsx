import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import HomeContent from "./Content";

const SwiperSlide = () => {
  return (
    <div className="relative h-[480px] lg:h-screen">
      <div className="absolute -z-50">
        <AppImage
          src={IMAGE_SOUCE.BANNER_1}
          fill
          classNameContainer="h-[480px] lg:h-screen w-screen"
          className="object-cover"
          alt=""
        />
      </div>
      {/* content */}
      <HomeContent />
    </div>
  );
};

export default SwiperSlide;
