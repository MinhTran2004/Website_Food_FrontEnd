import { ICart } from "@/share/interface/cart.interface";
import { formatVND } from "@/utils/formatVND";
import clsx from "clsx";
import AppImage from "../../Image/AppImage";
import UpdateQuantity from "./UpdateQuantity";

export interface IProductCart extends ICart {
  lineBottom?: boolean;
  onMinus?: (cart: ICart) => void;
  onAdd?: (cart: ICart) => void;
  onDelete?: (cart: ICart) => void;
}

const ProductCart: React.FC<IProductCart> = ({
  lineBottom = false,
  ...cart
}) => {
  return (
    <div
      className={clsx(
        `flex max-w-7xl gap-2`,
        lineBottom && `border-b border-colorGray pb-4`,
      )}
    >
      <AppImage
        src={cart.product.image}
        classNameContainer="h-30 w-30 rounded-xl"
        alt=""
      />

      <div className="flex flex-1 flex-col">
        <div className="flex-1 space-x-1">
          <div className="flex justify-between gap-3">
            <p className="font-medium text-xl flex-1 line-clamp-1">
              {cart.product.name}
            </p>
            <p className="font-medium text-lg text-colorOrange">
              {formatVND(cart.product.price * cart.quantity)}
            </p>
          </div>

          <div className="flex justify-between gap-3">
            <p className="text-colorGray text-[14px] flex-1 line-clamp-2">
              <div
                dangerouslySetInnerHTML={{
                  __html: cart.product.description_detail,
                }}
              />
            </p>
            <p className="text-sm text-colorGray">{`${formatVND(
              cart.product.price,
            )} / món`}</p>
          </div>
        </div>

        <UpdateQuantity {...cart} />
      </div>
    </div>
  );
};

export default ProductCart;
