import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";

const HomeIntro = () => {
  return (
    <div className="bg-[#f9f5ef] md:py-20 px-6 relative">
      <AppImage
        src={IMAGE_SOUCE.Home_intro_left}
        classNameContainer="hidden lg:block min-w-[300px] !absolute left-0 top-0 bottom-0"
        alt=""
      />

      <div className="grid lg:grid-cols-2 max-w-7xl mx-auto py-10 gap-6 lg:gap-10 z-50">
        <AppImage
          src={IMAGE_SOUCE.Home_intro_avatar}
          classNameContainer="h-[450px] lg:h-[600px] w-full"
          className="object-contain z-50"
          alt=""
        />

        <div className="flex flex-col">
          <p className="mb-4 text-lg font-medium uppercase z-50">Ẩm thực ngon</p>
          <h2 className="text-[40px] xl:text-[55px] leading-[40px] xl:leading-[60px] font-semibold uppercase z-50">
            Khám phá hương vị đậm đà & Cay của ẩm thực thái
          </h2>
          <p className="py-4 text-base z-50">
            Với hương vị đậm đà và cay nồng, là điểm đến lý tưởng cho những ai
            yêu thích ẩm thực đặc trưng của Đông Nam Á. Khám phá hương vị đậm &
            cay của ẩm thực Thái là một hành trình ngon miệng đưa bạn đến với
            những món ăn quyến rũ, từ sôi động đến dịu dàng, tạo nên một trải
            nghiệm ẩm thực độc đáo và sâu sắc.
          </p>

          <AppImage
            src={IMAGE_SOUCE.Home_intro_food}
            classNameContainer="h-[300px] md:h-[400px] lg:h-[450px] w-full flex z-50"
            className="object-contain"
            alt=""
          />
        </div>
      </div>

      <AppImage
        src={IMAGE_SOUCE.Home_intro_right}
        classNameContainer="hidden lg:block min-w-[300px] !absolute right-0 top-0 bottom-0"
        alt=""
      />
    </div>
  );
};

export default HomeIntro;
