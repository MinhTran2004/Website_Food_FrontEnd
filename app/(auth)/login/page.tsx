import AppLine from "@/component/AppLine"
import AppButton from "@/component/Button/AppButton"
import AppCheckBox from "@/component/CheckBox/AppCheckBox"
import AppInput from "@/component/Input/AppInput"
import { ROUTE } from "@/share/contanst/route.constants"
import Link from "next/link"
import { CgPassword } from "react-icons/cg"
import { FaFacebook } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import { MdOutlineMail } from "react-icons/md"
import FormField from "./FormField"

const LoginScreen = () => {
    return (
        <div className="flex h-full justify-center items-center bg-colorBeige">
            <div className="min-w-xl p-14 bg-colorWhite rounded-2xl space-y-5">
                <div className="space-y-2 pb-2">
                    <h1 className="text-center font-medium text-4xl">Chào mừng trở lại!</h1>
                    <p className="text-colorOrange text-center">Đăng nhập để đặt món yêu thích của bạn chỉ trong vài phút</p>
                </div>

                <FormField />

                <div className="flex justify-between items-center gap-2">
                    <AppLine />
                    <p className="text-md whitespace-nowrap font-medium text-colorOrange">ĐĂNG NHẬP BẰNG</p>
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

                <p className="text-center text-colorGray">Bạn chưa có tài khoản? <Link href={ROUTE.REGISTER} className="text-colorOrange font-medium text-[17px]">Tạo tài khoản</Link></p>

            </div>
        </div>
    )
}

export default LoginScreen