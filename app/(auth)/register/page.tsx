import AppLine from "@/component/AppLine"
import { ROUTE } from "@/share/contanst/route.constants"
import Link from "next/link"
import FormField from "./FormField"
import ButtonAuth from "@/component/ButtonAuth"

const RegisterScreen = () => {
    return (
        <div className="flex h-full justify-center items-center bg-colorWhite">
            <div className="flex flex-col justify-center w-full h-full bg-colorWhite rounded-2xl space-y-5 px-2 sm:max-w-lg sm:h-fit sm:px-12 sm:py-8">
                <div className="space-y-1">
                    <h1 className="text-center font-medium text-4xl">Tạo tài khoản</h1>
                    <p className="text-colorOrange text-center">Nhập thông tin của bạn để bắt đầu mua hàng</p>
                </div>

                <FormField />

                <div className="flex justify-between items-center gap-2">
                    <AppLine />
                    <p className="text-md whitespace-nowrap font-medium text-colorOrange">ĐĂNG KÝ BẰNG</p>
                    <AppLine />
                </div>

                <ButtonAuth />

                <p className="text-center text-colorGray">Bạn đã có tài khoản? <Link href={ROUTE.LOGIN} className="text-colorOrange font-medium text-[17px]">Đăng nhập</Link></p>

            </div>
        </div>
    )
}

export default RegisterScreen;