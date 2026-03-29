"use client";
import AppUserSearch from "@/component/AppUserSearch";
import AppInput from "@/component/Input/AppInput";
import { IUser } from "@/types/interface/user.interface";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Props {
  setSearch: (value: string) => void;
  data: IUser[];
}

const SearchChat: React.FC<Props> = ({ setSearch, data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="border-b border-colorGray relative" ref={wrapperRef}>
      <div className="p-4 w-full">
        <h1 className="font-medium text-2xl">Tin nhắn</h1>
        <AppInput
          iconLeft={<IoSearchOutline />}
          placeholder="Tìm kiếm"
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>

      {isOpen && (
        <div className="w-full h-full absolute bg-white z-50">
          {data.map((item) => (
            <AppUserSearch key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchChat;
