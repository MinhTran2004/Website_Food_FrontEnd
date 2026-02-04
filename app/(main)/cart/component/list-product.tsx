import AppButton from "@/component/Button/AppButton";
import ProductCart from "@/component/Product/ProductCart";

const ListProduct = () => {
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

        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCart key={index} lineBottom={index < 4} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
