"use client";
import { ICart } from "@/share/interface/cart.interface";
import { formatDate } from "@/utils/formatDate";
import { formatVND } from "@/utils/formatVND";
import { useState } from "react";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AppLine from "./AppLine";
import AppButton from "./Button/AppButton";
import ProductOrder from "./Product/ProductOrder";

const AppOrderHistory: React.FC<ICart> = ({ ...cart }) => {
  const [isShowBody, setIsShowBody] = useState<boolean>(false);

  return (
    <div className="border border-colorGrayLight rounded-md shadow-[0_0_12px_rgba(149,149,149,0.2)]">
      {/* header */}
      <div className="flex justify-between px-6 pt-4 pb-2">
        <div className="flex items-center gap-4">
          <BsBoxSeam size={20} />

          <div>
            <p className="font-medium text-lg">#{cart._id}</p>
            <p className="text-sm text-colorGray">
              {formatDate(cart.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="space-y-1.5">
            <p className="text-sm text-center py-1 bg-colorGreenLight text-colorGreenSuccess font-medium rounded-full">
              Đã giao
            </p>
            <p className="font-medium">{formatVND(1231231)}</p>
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

          <div className="my-2 space-y-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <ProductOrder key={index} {...cart} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppOrderHistory;
