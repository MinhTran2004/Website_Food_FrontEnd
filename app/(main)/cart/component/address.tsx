import AppButton from "@/component/Button/AppButton";
import { ROUTE } from "@/share/contanst/route.constants";
import { IAddress } from "@/share/interface/address.interface";
import Link from "next/link";
import React from "react";

const Address: React.FC<IAddress> = (props) => {
  const address = `${props.addressDetail} ${props.district} ${props.city}`
  return (
    <div className="p-6 rounded-2xl border border-colorGrayLight shadow-[0_0_12px_rgba(149,149,149,0.2)]">
      <h3 className="text-xl font-medium">Địa chỉ nhận hàng</h3>

      <div className="my-3 space-y-1">
        <p>
          Địa chỉ: <span className="text-colorGray">{address}</span>
        </p>
        <p>
          Số điện thoại: <span className="text-colorGray"> {props.phone}</span>
        </p>
      </div>

      <Link href={ROUTE.ADDRESS_INFO}>
        <AppButton
          buttonDefault
          text={{ children: "Thay đổi địa chỉ", className: "text-sm" }}
          className="w-fit border border-colorGray rounded-2xl py-1.5 px-3 hover:bg-colorOrange hover:text-colorWhite hover:border-colorOrange"
        />
      </Link>
    </div>
  );
};
export default Address;
