import AppButton from "@/component/Button/AppButton";
import AppLinkButton from "@/component/Button/AppLinkButton";
import { ROUTE } from "@/share/contanst/route.constants";
import { IAddress } from "@/share/interface/address.interface";
import Link from "next/link";
import React from "react";

interface Props {
  addres?: IAddress | null;
}

const Address: React.FC<Props> = ({ addres }) => {
  if (!addres) {
    return (
      <div className="p-6 rounded-2xl border border-colorGrayLight shadow-[0_0_12px_rgba(149,149,149,0.2)] space-y-2">
        <h3 className="text-xl font-medium">Địa chỉ nhận hàng</h3>

        <AppLinkButton
          href={ROUTE.ADDRESS_INFO}
          buttonDefault
          text={{ children: "Thêm địa chỉ", className: "text-sm" }}
          className="w-fit border border-colorGray rounded-2xl py-1.5 px-3 hover:bg-colorOrange hover:text-colorWhite hover:border-colorOrange"
        />
      </div>
    );
  }

  const address = `${addres.addressDetail} ${addres.district} ${addres.city}`;
  return (
    <div className="p-6 rounded-2xl border border-colorGrayLight shadow-[0_0_12px_rgba(149,149,149,0.2)]">
      <h3 className="text-xl font-medium">Địa chỉ nhận hàng</h3>

      <div className="my-3 space-y-1">
        <p>
          Địa chỉ: <span className="text-colorGray">{address}</span>
        </p>
        <p>
          Số điện thoại: <span className="text-colorGray"> {addres.phone}</span>
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
