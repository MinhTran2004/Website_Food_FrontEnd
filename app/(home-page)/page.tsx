import HeaderHome from "@/component/Layout/HeaderHome";
import HeaderHomeMobile from "@/component/Layout/HeaderHomeMobile";
import HomeAboutMe from "./component/AboutMe";
import HomeBlog from "./component/Blog";
import HomeExperience from "./component/Experience";
import HomeFooter from "./component/Footer";
import HomeSubscribe from "./component/HomeSubscribe";
import HomeIntro from "./component/Intro";
import HomeMenu from "./component/Menu/inex";
import NavbarFixed from "./component/NavbarFixed";
import HomeStats from "./component/Stats";
import SwiperSlide from "./component/SwiperSlide";

const HomePageScreen = () => {
  return (
    <div className="relative">
      {/* header */}
      <div className="sticky top-0 bg-white z-999">
        <HeaderHome />
        <HeaderHomeMobile />
      </div>
      <div className="space-y-16 h-full">
        <SwiperSlide />
        {/* <HomeProduct /> */}
        <HomeMenu />
        <HomeIntro />
        <HomeStats />
        <HomeExperience />
        <HomeAboutMe />
        <HomeBlog />
        <div>
          <HomeSubscribe />
          <HomeFooter />
        </div>
      </div>

      <NavbarFixed />
    </div>
  );
};

export default HomePageScreen;
