import { ROUTE } from "@/types/contanst/route.constants";
import { IMessageFirstRoom } from "@/types/interface/message.interface";
import { getRelativeTime } from "@/utils/getRelativeTime";
import clsx from "clsx";
import Link from "next/link";
import AppImage from "./Image/AppImage";

interface Props {
  room: IMessageFirstRoom;
  status: boolean;
}

const AppChat: React.FC<Props> = ({ room, status }) => {
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
        <div className="flex justify-between">
          <p className="font-medium">{room.user.username}</p>
          <p className="text-sm">{`${getRelativeTime(room.message.createdAt).value}  ${getRelativeTime(room.message.createdAt).unit}`}</p>
        </div>
        <p>{room.message.message}</p>
      </div>
    </Link>
  );
};

export default AppChat;
