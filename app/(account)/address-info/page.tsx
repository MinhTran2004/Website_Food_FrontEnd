"use client";

import CardAddress from "@/component/Address/CardAddress";
import AppLine from "@/component/AppLine";
import AppButton from "@/component/Button/AppButton";
import { addressService } from "@/service/address.service";
import { IAddress } from "@/share/interface/address.interface";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import FormAdd from "./component/FormAdd";
import FormUpdate from "./component/FormUpdate";

const AddressInfoPage = () => {
  const [isAddNew, setIsAddNew] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [address, setAdress] = useState<IAddress>();

  const { data, isPending, refetch } = useQuery({
    queryKey: ["get-list-address"],
    queryFn: () => addressService.getListAddress(),
  });

  return (
    <div className="p-6 rounded-lg bg-white">
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-2xl">Địa chỉ giao hàng</p>
          <p className="text-colorGray">Quản lý địa chỉ giao hàng của bạn</p>
        </div>

        {!isAddNew && (
          <AppButton
            text={{ children: "Thêm địa chỉ mới", className: "font-normal" }}
            className="px-4 min-h-[40px] bg-colorBlue rounded-md"
            iconLeft={<FiPlus />}
            onClick={() => setIsAddNew(true)}
          />
        )}
      </div>

      <AppLine className="my-4" />

      {isAddNew && <FormAdd onCancel={setIsAddNew} refetch={refetch} />}
      {isUpdate && address && (
        <FormUpdate dataInit={address} onCancel={setIsUpdate} refetch={refetch} />
      )}

      <div className="grid grid-cols-2 gap-6">
        {data?.data?.items?.map((item) => (
          <CardAddress
            key={item._id}
            data={item}
            onUpdate={() => {
              setIsUpdate(true);
              setAdress(item);
            }}
            isChecked={item.isDefault}
          />
        ))}
      </div>
    </div>
  );
};

export default AddressInfoPage;
