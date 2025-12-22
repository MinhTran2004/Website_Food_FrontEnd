import AppText from "@/component/Text/AppText";
import { COLOR } from "@/share/contanst/color";
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
      <AppText
        typo="BASE_LARGE"
        style={{ color: COLOR.gray }}
        text="Nhan Hoa © 2024. All Rights Reserved."
      />

      <div className="flex gap-3">
        <Item icon={<FaFacebookF className="text-xl text-white" />} />
        <Item icon={<FaTwitter className="text-xl text-white" />} />
        <Item icon={<FaInstagram className="text-xl text-white" />} />
        <Item icon={<FaYoutube className="text-xl text-white" />} />
        <Item icon={<FaThreads className="text-xl text-white" />} />
      </div>
    </div>
  );
};

export default FooterNetWork;
