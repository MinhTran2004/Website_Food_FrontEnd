import { IMAGE_SOUCE } from "@/public/assets/images";
import Image from "next/image";

export default function Gallery() {
  return (
    <div>
      <div className="w-[400px]">
        <Image
          src="/assets/images/banner_1.png"
          alt="Banner"
          width={200}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
