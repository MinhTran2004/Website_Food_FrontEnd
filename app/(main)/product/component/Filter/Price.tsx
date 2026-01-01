"use client";
import AppLine from "@/component/AppLine";
import AppButton from "@/component/Button/AppButton";
import AppCheckBox from "@/component/ChekBox/AppCheckBox";
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
        <h3 className="text-lg font-medium">GIÁ SẢN PHẨM</h3>
        {hasChecked && (
          <AppButton
            buttonDefault
            text={{
              children: "Xóa",
              className: "text-colorOrange",
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
            label={{ children: item.label }}
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
