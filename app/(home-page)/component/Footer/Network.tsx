import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Item = ({ icon }: { icon: ReactNode }) => (
  <Link
    href={"#"}
    className="w-[50px] h-[50px] border border-gray-400 flex justify-center items-center hover:bg-[#EC5708] hover:border-[#EC5708]"
  >
    {icon}
  </Link>
);

const FooterNetWork = () => {
  return (
    <div className="flex justify-between items-center">
      <p className="text-lg text-gray-500">
        Nhan Hoa © 2024. All Rights Reserved.
      </p>

      <div className="flex gap-3">
        <Item icon={<FaFacebookF className="text-white text-xl" />} />
        <Item icon={<FaTwitter className="text-white text-xl" />} />
        <Item icon={<FaInstagram className="text-white text-xl" />} />
        <Item icon={<FaYoutube className="text-white text-xl" />} />
        <Item icon={<FaThreads className="text-white text-xl" />} />
      </div>
    </div>
  );
};

export default FooterNetWork;
