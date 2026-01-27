import AppButton from "@/component/Button/AppButton";
import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";

const ItemSelect = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <p className="text-2xl font-medium">·</p>
    <p className="text-lg font-medium">{text}</p>
  </div>
);

const HomeExperience = () => {
  return (
    <div className="bg-[#f9f5ef] py-10 relative px-6">
      <AppImage
        src={IMAGE_SOUCE.BANNER_EXPERIENCE_LEFT}
        classNameContainer="w-[calc(56%)] !absolute left-0 top-0 bottom-0"
        alt=""
      />

      <div className="grid justify-center items-center lg:grid-cols-2 max-w-7xl mx-auto">
        <AppImage
          src={IMAGE_SOUCE.BANNER_EXPERIENCE_FOOD}
          classNameContainer="h-[450px] lg:h-[650px] lg:w-[calc(84%)]"
          className="object-contain"
          alt=""
        />
        <div className="flex flex-col items-start gap-2 lg:gap-8 z-50">
          <div>
            <p className="mb-4 text-lg font-medium uppercase">Món ngon Thái</p>
            <h2 className="mb-2.5 uppercase text-[40px] xl:text-[55px] leading-[40px] xl:leading-[60px] font-semibold">
              Trải nghiệm văn hoá ẩm thực sống động của Thái Lan
            </h2>

            <p className="mb-8 text-base text-colorGray">
              Khám phá hương vị đậm & cay của ẩm thực Thái, một cuộc phiêu lưu
              ẩm thực đầy màu sắc và đa dạng trong lòng Bangkok sôi động hay
              những ngôi làng truyền thống yên bình. Hãy dấn thân vào thế giới
              ẩm thực Thái Lan để trải nghiệm những khoảnh khắc tinh tế, từ món
              Pad Thai thơm ngon đến cà ri dừa đặc trưng, tạo nên một hành trình
              đầy thú vị và sâu lắng.
            </p>
          </div>

          <div>
            <ItemSelect text="MÓN ĂN" />
            <ItemSelect text="TUYỆT TÁC ẨM THỰC" />
            <ItemSelect text="ĐẦU BẾP KINH NGHIỆM" />
          </div>

          <AppButton
            text={{ children: "LIÊN HỆ", className: "text-xl font-medium" }}
          />
        </div>
      </div>

      <AppImage
        src={IMAGE_SOUCE.BANNER_EXPERIENCE_RIGHT}
        classNameContainer="hidden lg:w-[calc(26%)] h-[80%] !absolute right-0 top-1/2 -translate-y-1/2"
        alt=""
      />
    </div>
  );
};

export default HomeExperience;
