import { io, Socket } from "socket.io-client";

let socket: Socket | null = null;

export const connectSocket = (accessToken: string) => {
  if (socket?.connected) return socket;

  socket = io(process.env.NEXT_PUBLIC_API_URL!, {
    auth: { token: accessToken },
  });

  return socket;
};

export const getSocket = () => {
  if (!socket) return null;
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

export const offSocket = (event: string, callback?: () => void) => {
  socket?.off(event, callback);
};
