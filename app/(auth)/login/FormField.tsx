'use client'
import { useToast } from "@/component/AppToast";
import AppButton from "@/component/Button/AppButton";
import AppCheckBoxFormik from "@/component/CheckBox/AppCheckBoxFormik";
import AppInput from "@/component/Input/AppInput";
import { userService } from "@/service/user.service";
import { ROUTE } from "@/share/contanst/route.constants";
import { useMutation } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { CgPassword } from "react-icons/cg";
import * as Yup from "yup"

const FormField = () => {
    const toast = useToast()
    const route = useRouter();

    const { mutate, isPending } = useMutation({
        mutationFn: userService.loginService,
        onSuccess: (res) => {
            if (res.data?.accessToken) {
                localStorage.setItem('token', res.data?.accessToken);
                route.push(ROUTE.HOME)
            } else {
                toast.ERROR('The token has expired.');
            }
        },
        onError: (err) => {
            toast.ERROR(err.message);
        }
    })

    const inintValues = {
        email: '',
        password: '',
    }

    const validationSchema = Yup.object(
        {
            email: Yup.string().required("Không để trống ô nhậpl").email("Email không hợp lệ"),
            password: Yup.string().required("Không để trống ô nhập").min(6, "Mật khẩu ít nhất 6 ký tự"),
        }
    )

    return (
        <Formik
            initialValues={inintValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                mutate(values);
            }}
        >
            {({ handleSubmit }) => (
                <Form className="space-y-5" onSubmit={handleSubmit}>
                    <AppInput
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="example@gmail.com"
                        iconLeft={<CgPassword className="text-colorGray" size={20} />}
                    />

                    <AppInput
                        name="password"
                        label="Mật khẩu"
                        placeholder="Nhập mật khẩu của bạn"
                        iconLeft={<CgPassword className="text-colorGray" size={20} />}
                        type="password"
                    />

                    <AppButton
                        disabled={isPending}
                        isLoading={isPending}
                        type="submit"
                        text={{ children: "Đăng nhập", className: "text-[18px]" }}
                        style={{ width: '100%', marginTop: 10 }}
                    />
                </Form>
            )}
        </Formik>
    )
}

export default FormField;