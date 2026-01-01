import AppButton from "@/component/Button/AppButton";
import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import clsx from "clsx";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const AppNews = () => {
  return (
    <div className="w-full mr-8 bg-colorGrayLight">
      <AppImage
        src={IMAGE_SOUCE.IMG_ABOUT_ME_1}
        classNameContainer="h-[280px]"
        alt=""
      />
      <div className="p-5 space-y-4">
        <p className="uppercase text-md text-colorGray">29 tháng 10, 2024</p>
        <Link
          href={"#"}
          className="pb-4 text-xl font-medium text-black uppercase duration-300 cursor-pointer hover:text-colorOrange"
        >
          Ẩm thực thái đích thực
        </Link>
        <p className="line-clamp-2 text-colorGray">
          Yến mạch là loại thực phẩm có hàm lượng dinh dưỡng cũng như các khoáng
          chất thiết yếu cao. Tất cả những dưỡng chất này đều rất cần thiết
          trong quá trình nâng cao hệ miễn dịch cho bé, đồng thời thúc đẩy hỗ
          trợ hệ tiêu hóa tốt hơn. Bên cạnh đó, yến mạch là loại thực phẩm khá
          lành tính và ít gây dị ứng nên mẹ hoàn toàn có thể nấu cháo yến mạch
          cho bé khi bước vào giai đoạn ăn dặm.
        </p>

        <div className="group w-fit">
          <Link href={"#"} className="flex items-center">
            <AppButton
              buttonDefault
              text={{
                children: "Xem thêm",
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
