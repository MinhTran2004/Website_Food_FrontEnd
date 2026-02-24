"use client";

import AppLine from "@/component/AppLine";
import AppButton from "@/component/Button/AppButton";
import AppInput from "@/component/Input/AppInput";
import { userService } from "@/service/user.service";
import { IUser } from "@/share/interface/user.interface";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useState } from "react";
import { CgImage } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { LuCircleUser } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const PersonalInfoPage = () => {
  const [isEdit, setIsEdit] = useState<boolean>(true);

  const { data } = useQuery({
    queryKey: ["get-user"],
    queryFn: () => userService.getUser(),
  });

  const initValues: Partial<IUser> = data?.data ?? {};

  const validationSchema = {};

  return (
    <div className="p-6 rounded-lg bg-white">
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-2xl">Thông tin cá nhân</p>
          <p className="text-colorGray">Cập nhật thông tin cá nhân của bạn</p>
        </div>

        {isEdit ? (
          <AppButton
            text={{ children: "Chỉnh sửa" }}
            className="px-4 min-h-[40px] bg-colorGray rounded-md"
            onClick={() => setIsEdit(false)}
          />
        ) : (
          <AppButton
            text={{ children: "Hủy" }}
            className="px-4 min-h-[40px] bg-colorRedError rounded-md"
            onClick={() => setIsEdit(true)}
          />
        )}
      </div>

      <AppLine className="my-4" />

      <Formik
        initialValues={initValues}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({}) => (
          <Form className="grid grid-cols-2 gap-x-4 gap-y-8">
            <AppInput
              name="username"
              label="Tên người dùng"
              placeholder="example@gmail.com"
              iconLeft={<LuCircleUser className="text-colorGray" size={20} />}
            />

            <AppInput
              name="avatar"
              label="Avatar"
              placeholder="example@gmail.com"
              iconLeft={<CgImage className="text-colorGray" size={20} />}
            />

            <AppInput
              disabled
              name="email"
              label="Tài khoản"
              placeholder="example@gmail.com"
              iconLeft={<TfiEmail className="text-colorGray" size={20} />}
            />

            <AppInput
              disabled
              name="provider"
              label="Nhà cung cấp"
              placeholder="example@gmail.com"
              iconLeft={<TfiEmail className="text-colorGray" size={20} />}
            />

            {!isEdit && (
              <div className="flex gap-4">
                <AppButton
                  text={{ children: "Lưu thay đổi", className: "text-sm" }}
                  className="px-6 min-h-[40px] rounded-lg"
                />
                <AppButton
                  text={{
                    children: "Hủy",
                    className: "text-sm text-colorBlack",
                  }}
                  className="px-6 min-h-[40px] rounded-lg bg-white border border-colorGray"
                />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default PersonalInfoPage;
