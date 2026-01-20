import AppLine from "@/component/AppLine"
import AppButton from "@/component/Button/AppButton"
import { ROUTE } from "@/share/contanst/route.constants"
import Link from "next/link"
import { FaFacebook } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import FormField from "./FormField"

const RegisterScreen = () => {
    return (
        <div className="flex h-full justify-center items-center bg-colorBeige">
            <div className="min-w-xl p-14 bg-colorWhite rounded-2xl space-y-5">
                <div className="space-y-2 pb-2">
                    <h1 className="text-center font-medium text-4xl">Tạo tài khoản</h1>
                    <p className="text-colorOrange text-center">Nhập thông tin của bạn để bắt đầu mua hàng</p>
                </div>

                <FormField />

                <div className="flex justify-between items-center gap-2">
                    <AppLine />
                    <p className="text-md whitespace-nowrap font-medium text-colorOrange">ĐĂNG KÝ BẰNG</p>
                    <AppLine />
                </div>

                <div className="flex justify-between gap-8">
                    <AppButton
                        iconLeft={<FcGoogle size={20} />}
                        text={{ children: "Google", className: 'text-colorBlack' }}
                        className="bg-colorWhite border border-colorGray"
                    />

                    <AppButton
                        iconLeft={<FaFacebook size={20} className="text-colorBlue" />}
                        text={{ children: "Google", className: 'text-colorBlack' }}
                        className="bg-colorWhite border border-colorGray "
                    />
                </div>

                <p className="text-center text-colorGray">Bạn đã có tài khoản? <Link href={ROUTE.LOGIN} className="text-colorOrange font-medium text-[17px]">Đăng nhập</Link></p>

            </div>
        </div>
    )
}

export default RegisterScreen;