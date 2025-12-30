import AppImage from "@/component/Image/AppImage";
import AppText from "@/component/Text/AppText";
import { IMAGE_SOUCE } from "@/public/assets/images";

const HomeIntro = () => {
  return (
    <div className="bg-[#f9f5ef] py-24 relative">
      <AppImage
        src={IMAGE_SOUCE.Home_intro_left}
        classNameContainer="w-[calc((100%-1280px)/2-50px)] !absolute left-0 top-0 bottom-0"
        alt=""
      />

      <div className="grid grid-cols-2 max-w-7xl mx-auto gap-26">
        <AppImage
          src={IMAGE_SOUCE.Home_intro_avatar}
          classNameContainer="h-[650px] w-full"
          className="object-center"
          alt=""
        />

        <div>
          <AppText
            text="Ẩm thực ngon"
            typo="HEADER_6_B"
            className="mb-4 uppercase"
          />
          <AppText
            text="Khám phá hương vị đậm đà & Cay của ẩm thực thái"
            typo="HEADER_1_B"
            as={"h3"}
            className="mb-2.5 uppercase leading-14"
          />

          <AppText
            text="Với hương vị đậm đà và cay nồng, là điểm đến lý tưởng cho những ai
            yêu thích ẩm thực đặc trưng của Đông Nam Á. Khám phá hương vị đậm &
            cay của ẩm thực Thái là một hành trình ngon miệng đưa bạn đến với
            những món ăn quyến rũ, từ sôi động đến dịu dàng, tạo nên một trải
            nghiệm ẩm thực độc đáo và sâu sắc."
            typo="HEADER_6"
            className="pb-8 mb-8 text-colorGray"
          />

          <AppImage
            src={IMAGE_SOUCE.Home_intro_food}
            classNameContainer="h-[400px] w-full"
            className="object-center"
            alt=""
          />
        </div>
      </div>

      <AppImage
        src={IMAGE_SOUCE.Home_intro_right}
        classNameContainer="w-[calc((100%-1280px)/2-50px)] !absolute right-0 top-0 bottom-0"
        alt=""
      />
    </div>
  );
};

export default HomeIntro;
