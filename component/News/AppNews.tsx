import AppButton from "@/component/Button/AppButton";
import AppImage from "@/component/Image/AppImage";
import AppText from "@/component/Text/AppText";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { COLOR } from "@/share/contanst/color";
import clsx from "clsx";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const AppNews = () => {
  return (
    <div className="w-full mr-8 bg-[#f9f5ef]">
      <AppImage
        src={IMAGE_SOUCE.IMG_ABOUT_ME_1}
        classNameContainer="h-[280px]"
        alt=""
      />
      <div className="p-5 space-y-4">
        <AppText
          typo="BASE"
          color={COLOR.gray}
          className="uppercase"
          text="29 tháng 10, 2024"
        />
        <Link
          href={"#"}
          className="pb-4 text-xl font-medium text-black uppercase duration-300 cursor-pointer hover:text-orange-500"
        >
          Ẩm thực thái đích thực
        </Link>
        <AppText
          typo="BASE"
          color={COLOR.gray}
          className="line-clamp-2"
          text="Yến mạch là loại thực phẩm có hàm lượng dinh dưỡng cũng như các khoáng
            chất thiết yếu cao. Tất cả những dưỡng chất này đều rất cần thiết
            trong quá trình nâng cao hệ miễn dịch cho bé, đồng thời thúc đẩy hỗ
            trợ hệ tiêu hóa tốt hơn. Bên cạnh đó, yến mạch là loại thực phẩm khá
            lành tính và ít gây dị ứng nên mẹ hoàn toàn có thể nấu cháo yến mạch
            cho bé khi bước vào giai đoạn ăn dặm."
        />

        <div className="group w-fit">
          <Link href={"#"} className="flex items-center">
            <AppButton
              buttonDefault
              text={{
                text: "Xem thêm",
                typo: "BASE_LARGE_B",
                className: "leading-5 uppercase",
              }}
              iconRight={<FaAngleRight size={16} />}
            />
          </Link>
          <div
            className={clsx(
              "h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-[66%]"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default AppNews;
