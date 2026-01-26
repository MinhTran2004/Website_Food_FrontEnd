'use client'

import AppButton from "@/component/Button/AppButton"
import { ROUTE } from "@/share/contanst/route.constants"
import { signIn } from "next-auth/react"
import { FaFacebook } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

const ButtonAuth = () => {
    const onLoginGoogle = async () => {
        sessionStorage.setItem("login", "true");
        await signIn("google", {
            callbackUrl: ROUTE.HOME
        });
    };

    const onLoginFacebook = async () => {
        sessionStorage.setItem("login", "true");
        await signIn("facebook", {
            callbackUrl: ROUTE.HOME
        });
    };

    return (
        <div className="flex flex-col justify-between gap-2.5">

            <AppButton
                iconLeft={<FcGoogle size={20} />}
                text={{ children: "Login with Google", className: 'text-colorBlack' }}
                className="flex items-center justify-center py-3.5 border border-colorGrayLight bg-white rounded-2xl hover:bg-colorGrayLight transition-all font-bold text-sm shadow-md active:scale-95"
                onClick={onLoginGoogle}
            />

            <AppButton
                iconLeft={<FaFacebook size={20} className="text-colorBlue" />}
                text={{ children: "Login with Facebook", className: 'text-colorBlack' }}
                className="flex items-center justify-center py-3.5 border border-colorGrayLight bg-white rounded-2xl hover:bg-colorGrayLight transition-all font-bold text-sm shadow-md active:scale-95"
                onClick={onLoginFacebook}
            />
        </div>
    )
}

export default ButtonAuth
