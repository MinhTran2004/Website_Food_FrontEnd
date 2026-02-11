import { formatVND } from "@/utils/formatVND";
import clsx from "clsx";
import AppImage from "../Image/AppImage";
import { IProductCart } from "./ProductCart";

const ProductOrder: React.FC<IProductCart> = ({ ...cart }) => {
  return (
    <div className={clsx(`flex max-w-7xl gap-2`)}>
      <AppImage
        src={cart.product.image}
        classNameContainer="h-20 w-20 rounded-xl"
        alt=""
      />

      <div className="flex flex-col justify-center flex-1 space-x-1 ">
        <div className="flex justify-between gap-3">
          <p className="font-medium text-lg flex-1 line-clamp-1">
            {cart.product.name}
          </p>
          <p className="font-medium text-lg text-colorOrange">
            {formatVND(cart.product.price * cart.quantity)}
          </p>
        </div>

        <div className="flex justify-between gap-3">
          <p className="text-colorGray text-[14px] flex-1 line-clamp-2">
            Số lượng: <span>3</span>
          </p>
          <p className="text-sm text-colorGray">{`${formatVND(
            cart.product.price,
          )} / món`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
