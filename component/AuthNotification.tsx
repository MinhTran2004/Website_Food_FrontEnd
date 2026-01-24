'use client'
import { useSession } from "next-auth/react";
import { useToast } from "./AppToast";
import { useEffect, useRef } from "react";

const AuthNotification = () => {
    const { data, status } = useSession();
    const toast = useToast();
    const shownRef = useRef(false);
    
    useEffect(() => {
        if (status === "authenticated" && data?.accessToken) {
            const fromLogin = sessionStorage.getItem("login");

            if (fromLogin === "true") {
                toast.SUCCESS("Login success 🎉");
                sessionStorage.removeItem("login");
                // shownRef.current = true;
            }
        }
    }, [status, data, toast]);

    return null;
}

export default AuthNotification;