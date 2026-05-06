"use client";

import { siteConfig } from "@/data/siteConfig";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // /dist/ is safer for Next.js
import Image from "next/image";
import React, { useRef } from "react";
import YoutubeLogo from "@/public/YouTube.svg";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

const Youtube = () => {
  const youtubeRef = useRef(null);

  return (
    <section className="h-full w-full  padding py-10 flex flex-col gap-10">
      <div className="p-4 flex flex-wrap items-center gap-5 bg-(--bg-light) rounded-lg w-fit">
        <Link
          href={siteConfig?.social?.youtube}
          className="text-lg font-semibold"
        >
          Follow Us
        </Link>
        <Image
          src={YoutubeLogo}
          alt="toutube-logo"
          height={100}
          width={100}
          className=""
        />
      </div>
      <div
        ref={youtubeRef}
        className="h-full w-full grid grid-cols-2 xl:grid-cols-4  gap-5 items-center"
      >
        {siteConfig?.youtubeLinks?.map((link) => (
          <iframe
            key={link}
            className="rounded-lg h-[40vh] w-full"
            src={link}
            height={500}
            width={500}
            title="YouTube Short"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
          ></iframe>
        ))}
      </div>
    </section>
  );
};

export default Youtube;
