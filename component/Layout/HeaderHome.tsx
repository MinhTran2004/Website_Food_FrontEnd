import { IMAGE_SOUCE } from "@/public/assets/images";
import { ROUTE } from "@/types/contanst/route.constants";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";

const HeaderHome = async () => {
  return (
    <header className="hidden sm:block w-screen bg-white shadow-md">
      <div className="mx-auto max-w-7xl flex justify-between items-center py-4 px-6">
        <Link href={ROUTE.HOME} className="flex justify-center">
          <Image
            height={100}
            width={100}
            src={IMAGE_SOUCE.LOGO}
            alt={IMAGE_SOUCE.LOGO}
          />
        </Link>

        <Navbar />
      </div>
    </header>
  );
};

export default HeaderHome;
