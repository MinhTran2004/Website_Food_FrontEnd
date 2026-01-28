"use client";
import AppLine from "@/component/AppLine";
import AppButton from "@/component/Button/AppButton";
import { COLOR } from "@/share/contanst/color";
import clsx from "clsx";
import { useCallback, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const ItemStatus = ({
  text,
  status,
  onClick,
}: {
  text: string;
  status: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={clsx(
      `relative px-3 py-2 rounded-t-lg rounded-bl-lg border cursor-pointer hover:border-colorOrange`,
      status ? "border-colorOrange" : "border-colorGrayLight"
    )}
  >
    <p className="text-sm">{text}</p>
    {status && (
      <div
        style={{
          backgroundColor: COLOR.orange,
        }}
        className="absolute p-0.5 bottom-0 right-0 rounded-tl-lg"
      >
        <IoMdCheckmark size={12} color={COLOR.white} />
      </div>
    )}
  </div>
);

const DATA = [
  {
    label: "Nổi bật",
    value: "NoiBat",
    status: false,
  },
  {
    label: "Giảm giá",
    value: "GiamGia",
    status: false,
  },
  {
    label: "Còn Hàng",
    value: "Conhang",
    status: false,
  },
];

interface IStatus {
  label: string;
  value: string;
  status: boolean;
}

const ProductStatus = () => {
  const [status, setStatus] = useState<IStatus[]>(DATA);

  const onClick = useCallback(
    (value: string) => {
      const newData = status.map((item) => ({
        ...item,
        status: item.value === value ? !item.status : item.status,
      }));

      setStatus(newData);
    },
    [status]
  );

  const onRemove = useCallback(() => {
    setStatus(DATA);
  }, []);

  const hasChecked = status.some((item) => item.status);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-lg font-medium">TRẠNG THÁI</p>
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

      <div className="flex flex-wrap gap-2 mt-4">
        {status.map((item) => (
          <ItemStatus
            key={item.value}
            text={item.label}
            status={item.status}
            onClick={() => onClick(item.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductStatus;
