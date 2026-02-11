"use client";

import AppLine from "@/component/AppLine";
import AppOrderHistory from "@/component/AppOrderHistory";
import data from "@/share/contanst/cart.json";

const OrderHistoryPage = () => {
  return (
    <div className="p-6 rounded-lg bg-white">
      <div>
        <p className="font-medium text-2xl">Lịch Sử Đơn Hàng</p>
        <p className="text-colorGray">Xem và quản lý các đơn hàng của bạn</p>
      </div>

      <AppLine className="my-4" />

      {data.map((item) => (
        <AppOrderHistory key={item._id} {...item} />
      ))}
    </div>
  );
};
export default OrderHistoryPage;
