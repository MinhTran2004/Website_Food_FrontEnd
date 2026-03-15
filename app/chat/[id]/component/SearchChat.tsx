import AppInput from "@/component/Input/AppInput";
import { IoSearchOutline } from "react-icons/io5";

const SearchChat = () => {
  return (
    <div className="p-4 border-b border-colorGray">
      <h1 className="font-medium text-2xl">Tin nhắn</h1>
      <AppInput iconLeft={<IoSearchOutline />} placeholder="Tìm kiếm" />
    </div>
  );
};

export default SearchChat;
