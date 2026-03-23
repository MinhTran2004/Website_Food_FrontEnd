import AppInput from "@/component/Input/AppInput";
import { IUser } from "@/types/interface/user.interface";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  setSearch: (value: string) => void;
  data: IUser[];
}

const SearchChat: React.FC<Props> = ({ setSearch, data }) => {
  return (
    <div className=" border-b border-colorGray relative">
      <div className=" p-4  w-full">
        <h1 className="font-medium text-2xl">Tin nhắn</h1>
        <AppInput
          iconLeft={<IoSearchOutline />}
          placeholder="Tìm kiếm"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {data.length > 0 && (
        <div className="h-80 w-full absolute bg-amber-100 z-50"></div>
      )}
    </div>
  );
};

export default SearchChat;
