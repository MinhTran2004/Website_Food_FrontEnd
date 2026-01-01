import AppDropdown from "@/component/AppDropdown";
import AppProduct from "@/component/Product";

const OPTIONS = [
  { value: "NAME", label: "Sắp xếp theo tên" },
  { value: "LOW_PRICE", label: "Sắp xếp từ thấp đến cao" },
  { value: "HIGHT_PRICE", label: "Sắp xếp từu cao đến thấp" },
];

const ProductContainer = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center px-3 py-2 mb-5 bg-colorGrayLight">
        <div className="flex gap-2 items-center">
          <p className="font-medium">Hiển thị:</p>
          <p>12 / 24 / 36</p>
        </div>
        <AppDropdown options={OPTIONS} placeholder="Sắp xếp sản phẩm theo" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <AppProduct key={index} />
        ))}
      </div>
    </div>
  );
};
export default ProductContainer;
