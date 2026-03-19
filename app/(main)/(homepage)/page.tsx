import HomeAboutMe from "./component/AboutMe";
import HomeBlog from "./component/Blog";
import HomeExperience from "./component/Experience";
import HomeSubscribe from "./component/HomeSubscribe";
import HomeIntro from "./component/Intro";
import HomeMenu from "./component/Menu/inex";
import NavbarFixed from "./component/NavbarFixed";
import HomeStats from "./component/Stats";
import SwiperSlide from "./component/SwiperSlide";

const HomePageScreen = () => {
  return (
    <div className="relative">
      <div className="space-y-16 h-full">
        <SwiperSlide />
        {/* <HomeProduct /> */}
        <HomeMenu />
        <HomeIntro />
        <HomeStats />
        <HomeExperience />
        <HomeAboutMe />
        <HomeBlog />
        <HomeSubscribe />
      </div>

      <NavbarFixed />
    </div>
  );
};

export default HomePageScreen;
