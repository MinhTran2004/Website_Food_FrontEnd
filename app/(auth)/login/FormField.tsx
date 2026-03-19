"use client";
import { useToast } from "@/component/AppToast";
import AppButton from "@/component/Button/AppButton";
import AppInput from "@/component/Input/AppInputFormik";
import { ROUTE } from "@/types/contanst/route.constants";
import { Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CgPassword } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import * as Yup from "yup";

const FormField = () => {
  const toast = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: { email: string; password: string }) => {
    setLoading(true);
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      toast.ERROR("Sai email hoặc mật khẩu");
      return;
    }

    router.push(ROUTE.HOME);
  };

  const inintValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Không để trống ô nhập")
      .email("Email không hợp lệ"),
    password: Yup.string()
      .required("Không để trống ô nhập")
      .min(6, "Mật khẩu ít nhất 6 ký tự"),
  });

  return (
    <Formik
      initialValues={inintValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ handleSubmit }) => (
        <Form className="space-y-2" onSubmit={handleSubmit}>
          <AppInput
            type="email"
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            iconLeft={<TfiEmail className="text-colorGray" size={20} />}
          />

          <AppInput
            name="password"
            label="Mật khẩu"
            placeholder="Nhập mật khẩu của bạn"
            iconLeft={<CgPassword className="text-colorGray" size={20} />}
            type="password"
          />

          <AppButton
            isLoading={loading}
            disabled={loading}
            type="submit"
            text={{ children: "Đăng nhập", className: "text-[18px]" }}
            style={{ width: "100%", marginTop: 10 }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default FormField;
