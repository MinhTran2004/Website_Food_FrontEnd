import AppButton from "@/component/Button/AppButton";
import AppProduct from "@/component/Product";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const HomeProduct = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="mb-2 text-lg font-medium">ẨM THỰC THÁI</p>
      <div className="flex items-start gap-4 mb-8">
        <h2 className="w-[33%] text-5xl font-semibold">THỰC ĐƠN</h2>

        <p className="flex-6 text-base text-colorGray">
          Từ món ăn đường phố đậm đà đến món fine dining tinh tế. Khám phá danh
          mục món chính, món phụ, tráng miệng, đồ uống và nhiều loại thực phẩm
          khác, mỗi danh mục ẩn chứa bí quyết và công thức ẩm thực độc đáo.
        </p>

        <Link href={"#"} className="flex group">
          <AppButton
            buttonDefault
            text={{ children: "Xem thêm", className: "text-xl font-medium" }}
            iconRight={
              <GrFormNextLink
                size={24}
                className="group-hover:translate-x-[6px] duration-300"
              />
            }
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

export default HomeProduct;
