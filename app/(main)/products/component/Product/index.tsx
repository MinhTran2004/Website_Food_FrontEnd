import AppDropdown from "@/component/AppDropdown";
import AppProduct from "@/component/Product";
import { IProduct } from "@/share/interface/product.interface";

const OPTIONS = [
  { value: "NAME", label: "Sắp xếp theo tên" },
  { value: "LOW_PRICE", label: "Sắp xếp từ thấp đến cao" },
  { value: "HIGHT_PRICE", label: "Sắp xếp từ cao đến thấp" },
];

interface IProps{
  products: IProduct[]
}

const ProductContainer: React.FC<IProps> = ({products}) => {

  if (products.length === 0) return;
  
  return (
    <div className="px-4">
      <div className="flex justify-between items-center px-3 py-2 mb-5 bg-colorGrayLight rounded-md">
        <div className="flex gap-2 items-center">
          <p className="font-medium">Hiển thị:</p>
          <p>12 / 24 / 36</p>
        </div>
        <AppDropdown options={OPTIONS} placeholder="Sắp xếp sản phẩm" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.isArray(products) && products.map((item) => (
          <AppProduct key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default ProductContainer;
