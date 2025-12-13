import HomeNavbar from "./Navbar";
import HomeContent from "./Content";
import Image from "next/image";
import { IMAGE_SOUCE } from "@/public/assets/images";
import HomeHeaderSticky from "./HeaderSticky";

const SwiperSlide = () => {
  return (
    <div className="h-screen relative">
      <HomeNavbar />
      <HomeContent />
      {/* <HomeHeaderSticky /> */}
      <Image src={IMAGE_SOUCE.BANNER_1} fill alt="" className="-z-50" />
    </div>
  );
};

export default SwiperSlide;
