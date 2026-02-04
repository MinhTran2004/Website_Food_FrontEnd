import { IMAGE_SOUCE } from "@/public/assets/images";
import { formatVND } from "@/utils/formatVND";
import AppImage from "../../Image/AppImage";
import UpdateQuantity from "./UpdateQuantity";
import clsx from "clsx";

interface Props{
  lineBottom?: boolean
}

const ProductCart:React.FC<Props> = ({lineBottom = false}) => {
  return (
    <div className={clsx(`flex max-w-7xl gap-2`, lineBottom && `border-b border-colorGray pb-4`)}>
      <AppImage
        src={IMAGE_SOUCE.IMG_DEMO_PRODUCT_1}
        classNameContainer="h-30 w-30 rounded-xl"
        alt=""
      />

      <div className="flex flex-1 flex-col">
        <div className="flex-1 space-x-1">
          <div className="flex justify-between gap-3">
            <p className="font-medium text-xl flex-1 line-clamp-1">Phở bò tái nạm</p>
            <p className="font-medium text-lg text-colorOrange">
              {formatVND(110000)}
            </p>
          </div>

          <div className="flex justify-between gap-3">
            <p className="text-colorGray text-[14px] flex-1 line-clamp-2">
              Phở bò truyền thống với nước dùng ninh xương 12 tiếng, bò tái và
              nạm mềm
            </p>
            <p className="text-sm text-colorGray">{`${formatVND(
              55000
            )} / món`}</p>
          </div>
        </div>

        <UpdateQuantity />
      </div>
    </div>
  );
};

export default ProductCart;
