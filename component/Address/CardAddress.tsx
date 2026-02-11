import { IAddress } from "@/share/interface/address.interface";
import clsx from "clsx";
import { BsTrash } from "react-icons/bs";
import AppLine from "../AppLine";
import AppButton from "../Button/AppButton";

interface Props {
  isChecked?: boolean;
  onUpdate?: () => void;
  data: IAddress;
}

const CardAddress: React.FC<Props> = ({ isChecked, data, onUpdate }) => {
  return (
    <div
      className={clsx(
        "p-6 w-full rounded-lg shadow-[0_0_12px_rgba(149,149,149,0.2)] space-y-2",
        isChecked
          ? "border border-colorBlue bg-colorBlueLight"
          : "border border-colorGrayLight",
      )}
    >
      <div className="space-y-1">
        <p className="text-2xl font-medium">Nhà Riêng</p>
        {isChecked && (
          <p className="text-xs font-medium text-colorBlue bg-blue-100 w-fit px-2 py-1 rounded-sm">
            Mặc định
          </p>
        )}
      </div>

      <div>
        <p className="text-[15px] font-medium">456 Đường Nguyễn Huệ</p>
        <p className="text-[15px]">Quận 1 Thành phố Hồ Chí Minh</p>
      </div>

      <p className="font-medium">
        SDT: <span className="font-normal">+84 123 456 789</span>
      </p>

      <AppLine className="mb-4 mt-3" />

      <div className="flex gap-4 items-center">
        <AppButton
          //   iconLeft={<MdOutlineEdit className="text-colorBlack" />}
          text={{ children: "Chỉnh sửa", className: "text-sm text-colorBlack" }}
          className="min-h-[35px] px-4 bg-white border border-colorGray rounded-md"
          onClick={() => onUpdate && onUpdate()}
        />
        <AppButton
          buttonDefault
          iconLeft={<BsTrash className="text-colorRedError" />}
        />
      </div>
    </div>
  );
};

export default CardAddress;
