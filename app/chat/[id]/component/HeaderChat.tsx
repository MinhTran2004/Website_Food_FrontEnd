import AppImage from "@/component/Image/AppImage";
import { IUser } from "@/types/interface/user.interface";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { TbDotsVertical } from "react-icons/tb";

const HeaderChat: React.FC<IUser> = ({ ...user }) => {
  return (
    <div className="flex border-b px-3 p-1.5 border-colorGray gap-3 cursor-pointer items-center">
      <AppImage
        src={user.avatar}
        alt=""
        classNameContainer="h-[45] w-[50]"
        className="rounded-full"
      />
      <div className="w-full flex items-center justify-between py-2">
        <div>
          <p className="font-medium">{user.username}</p>
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
