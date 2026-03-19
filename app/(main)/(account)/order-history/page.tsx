"use client";

import AppLine from "@/component/AppLine";
import AppOrderHistory from "@/component/AppOrderHistory";
import { orderService } from "@/service/order.interface";
// import data from "@/share/contanst/cart.json";
import { useQuery } from "@tanstack/react-query";

const OrderHistoryPage = () => {
  const { data } = useQuery({
    queryKey: ["get-list-order"],
    queryFn: () => orderService.getListOrder(),
  });

  return (
    <div className="p-6 rounded-lg bg-white">
      <div>
        <p className="font-medium text-2xl">Lịch Sử Đơn Hàng</p>
        <p className="text-colorGray">Xem và quản lý các đơn hàng của bạn</p>
      </div>

      <AppLine className="my-4 bg-gray-200" />

      <div className="space-y-4">
        {data?.data?.items &&
          data?.data?.items.map((item) => (
            <AppOrderHistory key={item._id} {...item} />
          ))}
      </div>
    </div>
  );
};
export default OrderHistoryPage;
