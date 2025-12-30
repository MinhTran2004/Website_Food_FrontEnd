import AppButton from "@/component/Button/AppButton";
import AppProduct from "@/component/Product";
import AppText from "@/component/Text/AppText";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const HomeProduct = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <AppText typo="HEADER_6_B" className="mb-4" text="ẨM THỰC THÁI" />
      <div className="flex items-start gap-4 mb-8">
        <AppText
          text="THỰC ĐƠN"
          typo="HEADER_1_B"
          as={"h3"}
          className="w-[33%]"
        />

        <AppText
          typo="HEADER_6"
          className="flex-6 text-colorGray"
          text="Từ món ăn đường phố đậm đà đến món fine dining tinh tế. Khám phá danh
          mục món chính, món phụ, tráng miệng, đồ uống và nhiều loại thực phẩm
          khác, mỗi danh mục ẩn chứa bí quyết và công thức ẩm thực độc đáo."
        />

        <Link href={"#"} className="flex group">
          <AppButton
            buttonDefault
            text={{ text: "Xem thêm", typo: "HEADER_6" }}
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
