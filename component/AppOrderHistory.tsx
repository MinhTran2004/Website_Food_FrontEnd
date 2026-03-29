"use client";
import { IOrder } from "@/types/interface/order.interface";
import { formatDate } from "@/utils/formatDate";
import { formatVND } from "@/utils/formatVND";
import { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AppLine from "./AppLine";
import AppButton from "./Button/AppButton";
import ProductOrder from "./Product/ProductOrder";

const AppOrderHistory: React.FC<IOrder> = (order) => {
  const [isShowBody, setIsShowBody] = useState<boolean>(false);

  const address = `${order.address.addressDetail}, ${order.address.city}`;
  console.log(order);
  

  return (
    <div className="border border-gray-200 rounded-md  hover:shadow-[0_0_12px_rgba(236, 87, 8,0.1)] hover:cursor-pointer">
      {/* header */}
      <div className="flex justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <BsBoxSeam size={16} />

          <div className="space-y-1">
            <p className="font-medium text-base">#{order.id}</p>
            <p className="text-sm text-colorGray">
              {formatDate(order.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="space-y-1.5">
            <p className="text-sm text-center py-1 bg-colorGreenLight text-colorGreenSuccess font-medium rounded-full">
              Đã giao
            </p>
            <p className="font-medium">{formatVND(order.total)}</p>
          </div>

          {isShowBody ? (
            <AppButton
              buttonDefault
              iconLeft={<IoIosArrowUp size={20} />}
              onClick={() => setIsShowBody(false)}
            />
          ) : (
            <AppButton
              buttonDefault
              iconLeft={<IoIosArrowDown size={20} />}
              onClick={() => setIsShowBody(true)}
            />
          )}
        </div>
      </div>

      {/* body */}
      {isShowBody && (
        <div className="px-6">
          <AppLine className="bg-colorGray mb-4" />
          <p className="font-medium text-lg">Chi Tiết Sản Phẩm</p>

          <div className="my-2 space-y-1 pb-3">
            {order.cartItems.map((item) => (
              <ProductOrder key={item.id} {...item} />
            ))}
          </div>

          <AppLine className="bg-colorGray mb-4" />

          <h3 className="text-xl font-medium">Địa chỉ nhận hàng</h3>

          <div className="my-3 space-y-1">
            <p>Địa chỉ: {address}</p>
            <p>Số điện thoại: {order.address.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppOrderHistory;
