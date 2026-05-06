"use client";

import { siteConfig } from "@/data/siteConfig";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // /dist/ is safer for Next.js
import React, { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

const Youtube = () => {
  const youtubeRef = useRef(null);

  return (
    <section
      ref={youtubeRef}
      className="h-screen w-full grid grid-cols-2 xl:grid-cols-4  gap-5 items-center padding py-20"
    >
      {siteConfig?.youtubeLinks?.map((link) => (
        <iframe
          key={link}
          className="rounded-lg h-full w-full"
          src={link}
          title="YouTube Short"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ))}
    </section>
  );
};

export default Youtube;
