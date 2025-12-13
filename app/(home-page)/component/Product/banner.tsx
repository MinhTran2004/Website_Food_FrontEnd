import AppProduct from "@/component/Product";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const BannerHomeProduct = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-[16px] font-medium">ẨM THỰC THÁI</p>

      <div className="flex items-start gap-4 mb-8">
        <p className="text-[42px] font-semibold w-[33%]">THỰC ĐƠN</p>

        <p className="text-gray-400 max-w-lg">
          Từ món ăn đường phố đậm đà đến món fine dining tinh tế. Khám phá danh
          mục món chính, món phụ, tráng miệng, đồ uống và nhiều loại thực phẩm
          khác, mỗi danh mục ẩn chứa bí quyết và công thức ẩm thực độc đáo.
        </p>

        <Link href={"#"} className="flex group">
          <p className="font-semibold">Xem thêm</p>
          <GrFormNextLink
            size={24}
            className="group-hover:translate-x-[6px] duration-300"
          />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <AppProduct key={index} />
        ))}
      </div>
    </div>
  );
};

export default BannerHomeProduct;
