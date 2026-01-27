import AppButton from "@/component/Button/AppButton";
import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import clsx from "clsx";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

interface ImageHoverCardProps {
  image: string;
  name: string;
  className: string;
}

const ImageHoverCard: React.FC<ImageHoverCardProps> = ({
  image,
  name,
  className,
}) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden group cursor-pointer rounded-lg",
        className
      )}
    >
      {/* ẢNH */}
      <AppImage
        src={image}
        classNameContainer="w-full h-full transition-transform duration-500"
        alt=""
        className="object-center"
      />

      {/* LAYER TRẮNG + TEXT */}
      <div
        className="
          absolute inset-3 bg-white 
          flex flex-col items-center justify-center
          opacity-0 group-hover:opacity-100
          transition-all duration-600
      "
      >
        <p className="text-xl font-medium">{name}</p>
        <p className="mt-2">Thư viện ảnh</p>
      </div>
    </div>
  );
};

const HomeAboutMe = () => {
  return (
    <div className="px-8 py-13 hidden xl:block">
      <p className="mb-4 text-lg font-medium uppercase">Nói về nhà hàng</p>
      <div className="flex flex-col lg:flex-row items-start gap-2 lg:gap-4 mb-8">
        <h2 className="w-full lg:w-[33%] text-5xl font-semibold">THỰC ĐƠN</h2>

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

      <div className="grid grid-cols-4 gap-x-6">
        <div className="h-[700px] space-y-6">
          <ImageHoverCard
            image={IMAGE_SOUCE.IMG_ABOUT_ME_1}
            name="ẨM THỰC THÁI ĐÍCH THỰC"
            className="h-[40%]"
          />
          <ImageHoverCard
            image={IMAGE_SOUCE.IMG_ABOUT_ME_5}
            name="MÓN ẨM THỰC THÁI ĐỘC ĐÁO"
            className="h-[60%]"
          />
        </div>

        <div className="h-[700px] space-y-6">
          <ImageHoverCard
            image={IMAGE_SOUCE.IMG_ABOUT_ME_2}
            name="GÀ CÀ RI ĐỎ"
            className="h-[60%]"
          />
          <ImageHoverCard
            image={IMAGE_SOUCE.IMG_ABOUT_ME_6}
            name="CÁ HÙNG THÁI"
            className="h-[40%]"
          />
        </div>

        <div className="h-[700px] space-y-6">
          <ImageHoverCard
            image={IMAGE_SOUCE.IMG_ABOUT_ME_3}
            name="CHẢ GIÒ GIÒN"
            className="h-[50%]"
          />
          <ImageHoverCard
            image={IMAGE_SOUCE.IMG_ABOUT_ME_7}
            name="SÚP THÁI TRUYỀN THỐNG"
            className="h-[50%]"
          />
        </div>

        <div className="h-[700px] space-y-6">
          <ImageHoverCard
            image={IMAGE_SOUCE.IMG_ABOUT_ME_4}
            name="CÔNG THỨC THÁI TRUYỀN THỐNG"
            className=" h-[60%]"
          />
          <ImageHoverCard
            image={IMAGE_SOUCE.IMG_ABOUT_ME_8}
            name="SALAD THÁI TƯƠI MÁT"
            className="h-[40%]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutMe;
