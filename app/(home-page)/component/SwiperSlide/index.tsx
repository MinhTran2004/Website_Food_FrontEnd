import HeaderHome from "@/component/Layout/HeaderHome";
import { IMAGE_SOUCE } from "@/public/assets/images";
import Image from "next/image";
import HomeContent from "./Content";

const SwiperSlide = () => {
  return (
    <div className="relative h-screen">
      <HeaderHome />
      <HomeContent />
      <Image src={IMAGE_SOUCE.BANNER_1} fill alt="" className="-z-50" />
    </div>
  );
};

export default SwiperSlide;
