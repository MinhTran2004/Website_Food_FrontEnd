"use client";
import AppLine from "@/component/AppLine";
import AppButton from "@/component/Button/AppButton";
import { formatVND } from "@/utils/formatVND";
import { CiClock2, CiCreditCard1 } from "react-icons/ci";

interface Props {
  totalPrice: number;
}

const Payment: React.FC<Props> = ({ totalPrice }) => {
  return (
    <div className="flex flex-col gap-2 flex-1 border-colorGrayLight shadow-[0_0_12px_rgba(149,149,149,0.2)] h-fit p-6 rounded-2xl ">
      <h3 className="text-2xl font-medium">Tóm tắt đơn hàng</h3>

      <div className="flex justify-between">
        <p className="text-colorGray">Tạm tính</p>
        <p className="font-medium">{formatVND(totalPrice)}</p>
      </div>

      <div className="flex justify-between">
        <p className="text-colorGray">Phí giao hàng</p>
        <p className="font-medium">Miễn phí</p>
      </div>

      <AppLine className="my-2" />

      <div className="flex justify-between mb-1">
        <p className="text-xl font-medium">Tổng cộng</p>
        <p className="text-2xl font-medium text-colorRedError">
          {formatVND(totalPrice)}
        </p>
      </div>

      <AppButton
        iconLeft={<CiCreditCard1 />}
        text={{ children: "Thanh toán đơn hàng" }}
      />

      <div className="flex items-center justify-center gap-2 mt-2">
        <CiClock2 size={16} />
        <p className="text-colorGray text-sm">Giao hàng trong 25-35 phút</p>
      </div>
    </div>
  );
};

export default Payment;
