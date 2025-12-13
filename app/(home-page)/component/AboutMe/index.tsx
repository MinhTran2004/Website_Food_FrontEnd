import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import clsx from "clsx";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";

const DATA = [
  { image: IMAGE_SOUCE.IMG_ABOUT_ME_1, name: "ẨM THỰC THÁI ĐÍCH THỰC" },
  { image: IMAGE_SOUCE.IMG_ABOUT_ME_2, name: "GÀ CÀ RI ĐỎ" },
  { image: IMAGE_SOUCE.IMG_ABOUT_ME_3, name: "SÚP THÁI TRUYỀN THỐNG" },
  { image: IMAGE_SOUCE.IMG_ABOUT_ME_4, name: "CÔNG THỨC THÁI TRUYỀN THỐNG" },
  { image: IMAGE_SOUCE.IMG_ABOUT_ME_5, name: "MÓN ẨM THỰC THÁI ĐỘC ĐÁO" },
  { image: IMAGE_SOUCE.IMG_ABOUT_ME_6, name: "CÁ HÙNG THÁI" },
  { image: IMAGE_SOUCE.IMG_ABOUT_ME_7, name: "CHẢ GIÒ GIÒN" },
  { image: IMAGE_SOUCE.IMG_ABOUT_ME_8, name: "SALAD THÁI TƯƠI MÁT" },
];

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
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600 mt-2">Thư viện ảnh</p>
      </div>
    </div>
  );
};

const HomeAboutMe = () => {
  return (
    <div className="px-8 py-13">
      <p className="text-[16px] font-medium uppercase">Nói về nhà hàng</p>

      <div className="flex gap-12 mb-4">
        <p className="text-5xl flex-5 font-semibold uppercase">
          Nhà hàng của chúng tôi
        </p>

        <p className="text-lg flex-6 text-gray-400">
          Những đứa trẻ nào, thậm chí không có một đứa nào. Cũng không phải
          thung lũng từ ngày mai bao giờ hết. Posuere urna nec tincidunt
          praesent semper feugiat nibh sed pulvinar Cả feugiat đều không cho
          bình hay tincidunt vào men.
        </p>

        <Link href={"#"} className="flex flex-4  justify-center group">
          <p className="font-semibold text-lg uppercase">Xem thêm</p>
          <GrFormNextLink
            size={24}
            className="group-hover:translate-x-[6px] duration-300"
          />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-x-6">
        <div className="h-[720px] space-y-6">
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

        <div className="h-[720px] space-y-6">
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

        <div className="h-[720px] space-y-6">
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

        <div className="h-[720px] space-y-6">
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
