import { siteConfig } from "@/data/siteConfig";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-10">
      <h3 className="text-lg uppercase font-medium text-center">
        {siteConfig?.name}
      </h3>
      <h2 className="text-[10vw] leading-[10vw] font-bold text-(--text-dark)">
        PAGE NOT FOUND
      </h2>
      <Link href="/" className="btn bg-(--primary-forest) text-(--text-white)">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
