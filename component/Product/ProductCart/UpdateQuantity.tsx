"use client";

import AppButton from "@/component/Button/AppButton";
import { BsTrash } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";
import { IProductCart } from ".";

const UpdateQuantity: React.FC<IProductCart> = ({
  onMinus,
  onAdd,
  onDelete,
  ...cart
}) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <AppButton
          buttonDefault
          iconLeft={<FiMinus />}
          className="p-1 border border-colorGray rounded-full"
          onClick={() => onMinus && onMinus(cart)}
        />
        <p className="font-medium text-lg">{cart.quantity}</p>
        <AppButton
          buttonDefault
          iconLeft={<FiPlus />}
          className="p-1 border border-colorGray rounded-full"
          onClick={() => onAdd && onAdd(cart)}
        />
      </div>

      <AppButton
        buttonDefault
        iconLeft={<BsTrash size={18} />}
        className="text-colorRedError"
        onClick={() => onDelete && onDelete(cart)}
      />
    </div>
  );
};

export default UpdateQuantity;
