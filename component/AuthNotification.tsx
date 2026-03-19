'use client'
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useToast } from "./AppToast";

const AuthNotification = () => {
    const { data, status } = useSession();
    const toast = useToast();
    
    useEffect(() => {
        if (status === "authenticated" && data?.user.accessToken) {
            const fromLogin = sessionStorage.getItem("login");

            if (fromLogin === "true") {
                sessionStorage.removeItem("login");
                // shownRef.current = true;
            }
        }
    }, [status, data, toast]);

    return null;
}

export default AuthNotification;