import Link from "next/link";
import { ReactNode } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Item = ({ icon }: { icon: ReactNode }) => (
  <Link
    href={"#"}
    className="w-[50px] h-[50px] border border-colorGrayLight flex justify-center items-center hover:bg-colorOrange hover:border-colorOrange"
  >
    {icon}
  </Link>
);

const FooterNetWork = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse gap-4 md:justify-between items-center">
      <div className="flex gap-3">
        <Item icon={<FaFacebookF className="text-xl text-white" />} />
        <Item icon={<FaTwitter className="text-xl text-white" />} />
        <Item icon={<FaInstagram className="text-xl text-white" />} />
        <Item icon={<FaYoutube className="text-xl text-white" />} />
        <Item icon={<FaThreads className="text-xl text-white" />} />
      </div>
      <p className="text-colorGray">Nhan Hoa © 2024. All Rights Reserved.</p>
    </div>
  );
};

export default FooterNetWork;
