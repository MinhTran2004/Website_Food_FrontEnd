import { IMessageFirstRoom } from "@/share/interface/message.interface";
import AppImage from "./Image/AppImage";



const AppChat: React.FC<IMessageFirstRoom> = ({ user, message }) => {
  return (
    <div className="flex border-b p-1.5 items-center border-colorGray gap-3 cursor-pointer">
      <AppImage
        src={user.avatar}
        alt=""
        classNameContainer="h-[55] w-[66]"
        className="rounded-full"
      />
      <div className="w-full flex flex-col justify-between py-2">
        <div className="flex justify-between">
          <p className="font-medium">{user.username}</p>
          <p className="text-sm">2 phút trước</p>
        </div>
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default AppChat;
