import { IUser } from "@/types/interface/user.interface";
import AppImage from "./Image/AppImage";
import Link from "next/link";
import { ROUTE } from "@/types/contanst/route.constants";

const AppUserSearch: React.FC<IUser> = ({ ...user }) => {
  if (!user) return;

  return (
    <Link
      href={ROUTE.CHAT(user._id)}
      className="flex items-center gap-2 hover:bg-colorGrayLight px-4 py-2 cursor-pointer"
    >
      <AppImage
        src={user.avatar}
        alt=""
        className="rounded-full bg-red-500"
        classNameContainer="h-10 w-10"
      />

      <p>{user.username}</p>
    </Link>
  );
};

export default AppUserSearch;
