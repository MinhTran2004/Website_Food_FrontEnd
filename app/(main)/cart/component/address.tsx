import AppButton from "@/component/Button/AppButton";

const Address = () => {
  return (
    <div className="p-6 rounded-2xl border border-colorGrayLight shadow-[0_0_12px_rgba(149,149,149,0.2)]">
      <h3 className="text-xl font-medium">Thông tin đơn hàng</h3>

      <div className="my-3 space-y-1">
        <p>
          Địa chỉ:{" "}
          <span className="text-colorGray">
            123 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh
          </span>
        </p>
        <p>
          Số điện thoại: <span className="text-colorGray"> 0901 234 567</span>
        </p>
      </div>

      <AppButton
        buttonDefault
        text={{ children: "Thay đổi địa chỉ", className: "text-sm" }}
        className="w-fit border border-colorGray rounded-2xl py-1.5 px-3 hover:bg-colorOrange hover:text-colorWhite hover:border-colorOrange"
      />
    </div>
  );
};
export default Address;
