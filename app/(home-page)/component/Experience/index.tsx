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
    <div className="bg-[#f9f5ef] py-24 relative">
      <AppImage
        src={IMAGE_SOUCE.BANNER_EXPERIENCE_LEFT}
        classNameContainer="w-[calc(56%)] !absolute left-0 top-0 bottom-0"
        alt=""
      />

      <div className="grid grid-cols-2 max-w-7xl mx-auto">
        <AppImage
          src={IMAGE_SOUCE.BANNER_EXPERIENCE_FOOD}
          classNameContainer="h-[650px] w-[calc(84%)]"
          className="object-center"
          alt=""
        />
        <div className="flex flex-col items-start gap-8 z-50">
          <div>
            <p className="mb-4 text-lg font-medium uppercase">Món ngon Thái</p>
            <h2 className="mb-2.5 uppercase leading-14 text-5xl font-semibold">
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
        classNameContainer="w-[calc(26%)] h-[80%] !absolute right-0 top-1/2 -translate-y-1/2"
        alt=""
      />
    </div>
  );
};

export default HomeExperience;
