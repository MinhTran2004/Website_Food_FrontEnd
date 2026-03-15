import AppImage from "@/component/Image/AppImage";
import { IMAGE_SOUCE } from "@/public/assets/images";
import { IUser } from "@/share/interface/user.interface";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { TbDotsVertical } from "react-icons/tb";

const HeaderChat: React.FC<IUser> = ({...user}) => {
  return (
    <div className="flex border-b px-3 p-1.5 border-colorGray gap-1 cursor-pointer items-center">
      <AppImage
        src={IMAGE_SOUCE.IMG_DEMO_PRODUCT_1}
        alt=""
        classNameContainer="h-[60] w-[65]"
      />
      <div className="w-full flex items-center justify-between py-2">
        <div>
          <p className="font-medium text-lg">{user.username}</p>
          <p className="text-colorGray text-[15px]">Đang hoạt động</p>
        </div>

        <div className="flex gap-6">
          <FiPhone size={20} />
          <IoVideocamOutline size={20} />
          <TbDotsVertical size={20} />
        </div>
      </div>
    </div>
  );
};

export default HeaderChat;
