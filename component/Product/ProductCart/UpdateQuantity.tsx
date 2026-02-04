"use client";

import AppButton from "@/component/Button/AppButton";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const UpdateQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const onMinus = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const onAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <AppButton
          buttonDefault
          iconLeft={<FiMinus />}
          className="p-1 border border-colorGray rounded-full"
          onClick={onMinus}
        />
        <p className="font-medium text-lg">{quantity}</p>
        <AppButton
          buttonDefault
          iconLeft={<FiPlus />}
          className="p-1 border border-colorGray rounded-full"
          onClick={onAdd}
        />
      </div>

      <AppButton
        buttonDefault
        iconLeft={<BsTrash size={18} />}
        className="text-colorRedError"
      />
    </div>
  );
};

export default UpdateQuantity;
