"use client";
import AppTextarea from "@/component/AppTextarea";
import { useToast } from "@/component/AppToast";
import AppButton from "@/component/Button/AppButton";
import AppInput from "@/component/Input/AppInput";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import { useState } from "react";

import dynamic from "next/dynamic";
const AppMap = dynamic(() => import("@/component/AppMap"), { ssr: false });

const ContactPage = () => {
  const toast = useToast();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const initValues = {
    username: "",
    email: "",
    phone: "",
    content: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Không để trống ô nhậpl"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Không để trống ô nhập"),
    phone: Yup.string()
      .required("Không để trống ô nhập")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải gồm 10 chữ số"),
    content: Yup.string().required("Không để trống ô nhập"),
  });

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-center">
        Liên hệ với chúng tôi
      </h1>

      <AppMap />

      <div className="max-w-3xl mx-auto">
        <Formik
          initialValues={initValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setIsSubmit(true);
            setTimeout(() => {
              toast.SUCCESS("Yêu cầu đã được gửi");
              resetForm();
              setIsSubmit(false);
            }, 2000);
          }}
        >
          <Form>
            <div className="space-y-4 px-6">
              <AppInput
                name="username"
                label="Tên người dùng"
                placeholder="Nhập tên của bạn"
              />

              <AppInput name="email" label="Email" placeholder="Nhập email" />

              <AppInput
                name="phone"
                label="Số điện thoại"
                placeholder="Nhập số diện thoại"
              />

              <AppTextarea
                name="content"
                label="Nội dung"
                placeholder="Nội dung"
              />

              <div className="flex">
                <AppButton
                  type="submit"
                  disabled={isSubmit}
                  isLoading={isSubmit}
                  text={{ children: "Gửi đi" }}
                  className=""
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactPage;
