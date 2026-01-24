import AppLine from "@/component/AppLine"
import ButtonAuth from "@/component/ButtonAuth"
import { ROUTE } from "@/share/contanst/route.constants"
import Link from "next/link"
import FormField from "./FormField"

const LoginScreen = () => {
    return (
        <div className="flex h-full justify-center items-center bg-colorWhite">
            <div className="flex flex-col justify-center w-full h-full bg-colorWhite rounded-2xl space-y-5 px-3 sm:max-w-lg sm:h-fit sm:px-12 sm:py-8">
                <div className="space-y-1">
                    <h1 className="text-center font-medium text-4xl">Chào mừng trở lại!</h1>
                    <p className="text-colorOrange text-center">Đăng nhập để đặt món yêu thích của bạn chỉ trong vài phút</p>
                </div>

                <FormField />

                <div className="flex justify-between items-center gap-2">
                    <AppLine />
                    <p className="text-md whitespace-nowrap font-medium text-colorOrange">ĐĂNG NHẬP BẰNG</p>
                    <AppLine />
                </div>

                <ButtonAuth />

                <p className="text-center text-colorGray">Bạn chưa có tài khoản? <Link href={ROUTE.REGISTER} className="text-colorOrange font-medium text-[17px]">Tạo tài khoản</Link></p>

            </div>
        </div>
    )
}

export default LoginScreen