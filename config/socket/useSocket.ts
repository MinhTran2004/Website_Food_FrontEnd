"use client";
import { useEffect } from "react";
import { connectSocket } from "./event";

export const useSocket = (accessToken: string) => {
  useEffect(() => {
    if (!accessToken) return;
    const socket = connectSocket(accessToken);

    return () => {
      socket.disconnect();
    };
  }, [accessToken]);
};
