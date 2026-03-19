"use client";

import AppLine from "@/component/AppLine";
import AppInput from "@/component/Input/AppInput";
import { userService } from "@/service/user.service";
import { useQuery } from "@tanstack/react-query";
import { CgImage } from "react-icons/cg";
import { LuCircleUser } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const PersonalInfoPage = () => {
  const { data } = useQuery({
    queryKey: ["get-user"],
    queryFn: () => userService.getUser(),
  });

  return (
    <div className="p-6 rounded-lg bg-white">
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-2xl">Thông tin cá nhân</p>
          <p className="text-colorGray">Cập nhật thông tin cá nhân của bạn</p>
        </div>
      </div>

      <AppLine className="my-4" />

      <div className="grid md:grid-cols-2 gap-x-4 gap-y-8">
        <AppInput
          disabled
          name="username"
          label="Tên người dùng"
          placeholder="example@gmail.com"
          value={data?.data?.username}
          iconLeft={<LuCircleUser className="text-colorGray" size={20} />}
        />

        <AppInput
          disabled
          name="avatar"
          label="Avatar"
          placeholder="example@gmail.com"
          value={data?.data?.avatar}
          iconLeft={<CgImage className="text-colorGray" size={20} />}
        />

        <AppInput
          disabled
          name="email"
          label="Tài khoản"
          placeholder="example@gmail.com"
          value={data?.data?.email}
          iconLeft={<TfiEmail className="text-colorGray" size={20} />}
        />

        <AppInput
          disabled
          name="provider"
          label="Nhà cung cấp"
          placeholder="example@gmail.com"
          value={data?.data?.provider}
          iconLeft={<TfiEmail className="text-colorGray" size={20} />}
        />
      </div>
    </div>
  );
};
export default PersonalInfoPage;
