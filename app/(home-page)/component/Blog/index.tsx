import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import clsx from "clsx";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { MdChevronRight } from "react-icons/md";

const ItemBlog = () => {
  return (
    <div className="w-full mr-8 bg-[#f9f5ef]">
      <AppImage
        src={IMAGE_SOUCE.IMG_ABOUT_ME_1}
        classNameContainer="h-[280px]"
        alt=""
      />
      <div className="space-y-4 p-5">
        <p className="text-gray-400 uppercase">29 tháng 10, 2024</p>
        <Link
          href={"#"}
          className="text-black text-xl font-medium uppercase pb-4 hover:text-orange-500 cursor-pointer duration-300"
        >
          Ẩm thực thái đích thực
        </Link>
        <p className="line-clamp-2 text-gray-400">
          Yến mạch là loại thực phẩm có hàm lượng dinh dưỡng cũng như các khoáng
          chất thiết yếu cao. Tất cả những dưỡng chất này đều rất cần thiết
          trong quá trình nâng cao hệ miễn dịch cho bé, đồng thời thúc đẩy hỗ
          trợ hệ tiêu hóa tốt hơn. Bên cạnh đó, yến mạch là loại thực phẩm khá
          lành tính và ít gây dị ứng nên mẹ hoàn toàn có thể nấu cháo yến mạch
          cho bé khi bước vào giai đoạn ăn dặm.
        </p>
        <div className="group w-fit">
          <Link href={"#"} className="flex items-center">
            <p className="font-semibold text-base uppercase">Xem thêm</p>
            <FaAngleRight size={16} />
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

const HomeBlog = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="space-y-6 mb-8">
        <p className="text-center text-lg font-medium uppercase">
          Blog & Bài viết
        </p>
        <p className="text-center text-5xl font-semibold uppercase">
          Tin tức mới nhất
        </p>
      </div>

      <div className="flex">
        <ItemBlog />
        <ItemBlog />
        <ItemBlog />
      </div>
    </div>
  );
};

export default HomeBlog;
