import { ROUTE } from "@/types/contanst/route.constants";
import { IMessageFirstRoom } from "@/types/interface/message.interface";
import clsx from "clsx";
import Link from "next/link";
import AppImage from "./Image/AppImage";
import { useSession } from "next-auth/react";

interface Props {
  room: IMessageFirstRoom;
  status: boolean;
}

const AppChat: React.FC<Props> = ({ room, status }) => {
  const id = useSession().data?.user.id;
  
  return (
    <Link
      href={ROUTE.CHAT(room.user._id)}
      className={clsx(
        "flex border-b p-1.5 items-center border-colorGray gap-3 cursor-pointer",
        status && "bg-gray-100",
      )}
    >
      <AppImage
        src={room.user.avatar}
        alt=""
        classNameContainer="h-[55] w-[66]"
        className="rounded-full"
      />
      <div className="w-full flex flex-col justify-between py-2">
        <p className="font-medium">{room.user.username}</p>
        <p className="text-gray-500">
          {id === room.message.senderId ? "Bạn: " : ""} {room.message.message}
        </p>
      </div>
    </Link>
  );
};

export default AppChat;
