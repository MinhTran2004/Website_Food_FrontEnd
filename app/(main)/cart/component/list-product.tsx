import AppButton from "@/component/Button/AppButton";
import ProductCart from "@/component/Product/ProductCart";
import { ICart } from "@/share/interface/cart.interface";

interface Props {
  data: ICart[];
  onAdd?: (cart: ICart) => void;
  onMinus?: (cart: ICart) => void;
  onDelete?: (cart: ICart) => void;
}

const ListProduct: React.FC<Props> = ({ onAdd, onMinus, onDelete, data }) => {
  return (
    <div className="flex-1 min-w-[450px] p-6 rounded-2xl border border-colorGrayLight shadow-[0_0_12px_rgba(149,149,149,0.2)]">
      <div className="space-y-4">
        <div className="flex justify-between">
          <h3 className="text-xl font-medium">Các món đã chọn</h3>
          <AppButton
            buttonDefault
            text={{
              children: "Xóa tất cả",
              className: "font-medium text-colorRedError",
            }}
          />
        </div>

        {data.map((item, index) => (
          <ProductCart
            key={index}
            lineBottom={index < data.length - 1}
            onAdd={onAdd}
            onMinus={onMinus}
            onDelete={onDelete}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
