"use client";
import Image from "next/image";

export default function Gallery() {
  return (
    <div>
      {Array.from({ length: 2000 }).map((_, i) => (
        <div key={i} style={{ marginBottom: "50px" }}>
          <img
            src={`https://picsum.photos/seed/${i}/600/400`}
            alt="Banner"
            style={{ width: "100%", height: "auto" }}
          />

          {/* <Image
            src={`https://picsum.photos/seed/${i}/600/400`}
            alt="Banner"
            width={1200}
            height={600}
            priority
          /> */}
        </div>
      ))}
    </div>
  );
}
