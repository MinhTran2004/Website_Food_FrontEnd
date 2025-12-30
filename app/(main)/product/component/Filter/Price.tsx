"use client";
import AppLine from "@/component/AppLine";
import AppButton from "@/component/Button/AppButton";
import AppCheckBox from "@/component/ChekBox/AppCheckBox";
import AppText from "@/component/Text/AppText";
import { COLOR } from "@/share/contanst/color";
import { useCallback, useState } from "react";

const DATA = [
  {
    status: false,
    value: "min",
    label: "Dưới 5 triệu",
  },
  {
    status: false,
    value: "medium",
    label: "Từ 5 triệu đến 8 triệu",
  },
  {
    status: false,
    value: "max",
    label: "Trên 8 triệu",
  },
];

const ProductPrice = () => {
  const [dataSelect, setDataSelect] =
    useState<{ label: string; value: string; status: boolean }[]>(DATA);

  const onChange = useCallback(
    (value: string, checked: boolean) => {
      const newData = dataSelect.map((item) => ({
        ...item,
        status: item.value === value ? checked : false,
      }));
      setDataSelect(newData);
    },
    [dataSelect]
  );

  const onRemove = useCallback(() => {
    setDataSelect(DATA);
  }, []);

  const hasChecked = dataSelect.some((item) => item.status);

  return (
    <div>
      <div className="flex justify-between">
        <AppText text="GIÁ SẢN PHẨM" typo="HEADER_6_B" />
        {hasChecked && (
          <AppButton
            buttonDefault
            text={{
              text: "Xóa",
              typo: "TEXT_LG",
              style: { color: COLOR.orange },
            }}
            onClick={onRemove}
          />
        )}
      </div>
      <AppLine className="my-2 bg-gray-200" />

      <div>
        {dataSelect.map((item) => (
          <AppCheckBox
            key={item.value}
            label={{ text: item.label, typo: "TEXT_LG" }}
            checked={item.status}
            size="sm"
            className="py-2"
            onChange={(checked) => onChange(item.value, checked)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPrice;
