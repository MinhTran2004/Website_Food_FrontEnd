import { IMAGE_SOUCE } from "@/public/assets/images";
import { getCurrentPath } from "@/utils/getSeverUrl";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { CiHeart, CiSearch, CiShoppingBasket, CiUser } from "react-icons/ci";

const TextLink = ({
  href,
  text,
  status,
}: {
  href: string;
  text: string;
  status: boolean;
}) => (
  <div className="group">
    <Link href={href} className="font-semibold text-lg">
      {text}
    </Link>
    <div
      className={clsx(
        "h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-[90%]",
        status ? "w-[16px]" : "w-0"
      )}
    />
  </div>
);

const HomeHeaderSticky = async () => {
  const currentPatch = await getCurrentPath();

  return (
    <header className="w-screen bg-white">
      <div className="grid grid-cols-3 px-20 justify-between items-center py-4">
        <div className="flex gap-5">
          <TextLink href="#" text="TRANG CHỦ" status={currentPatch === "/"} />
          <TextLink href="#" text="KHUYẾN MÃI" status={currentPatch === "/a"} />
          <TextLink href="#" text="ĐỒ ĂN" status={currentPatch === "/b"} />
          <TextLink href="#" text="TIN TỨC" status={currentPatch === "/c"} />
          <TextLink href="#" text="LIÊN HỆ" status={currentPatch === "/d"} />
        </div>

        <Link href={"#"} className="flex justify-center">
          <Image src={IMAGE_SOUCE.IMG_LOGO_APP_BLACK} width={94} height={94} alt="" />
        </Link>

        <div className="flex gap-5 justify-end">
          <Link href={"#"}>
            <CiSearch className="text-3xl hover:text-white " />
          </Link>
          <Link href={"#"}>
            <CiHeart className="text-3xl hover:text-white " />
          </Link>
          <Link href={"#"}>
            <CiShoppingBasket className="text-3xl hover:text-white " />
          </Link>
          <Link href={"#"}>
            <CiUser className="text-3xl hover:text-white " />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HomeHeaderSticky;
