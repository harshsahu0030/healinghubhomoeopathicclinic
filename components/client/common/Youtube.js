"use client";

import { siteConfig } from "@/data/siteConfig";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; // /dist/ is safer for Next.js
import React, { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Youtube = () => {
  // 1. Create a local ref for this specific component
  const youtubeRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".you-one", {
        xPercent: 100,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: youtubeRef.current,
        animation: tl,
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
      });
    },
    {
      scope: youtubeRef,
    },
  );

  return (
    <section ref={youtubeRef} className="h-screen relative w-full">
      <div className="h-full w-full flex flex-col items-center justify-center text-[20vw] text-(--text-dark) font-bold leading-[20vw]">
        <span>Success</span>
        <span>Stories</span>
      </div>

      <div className="you-one absolute top-0 left-0 h-full w-full grid grid-cols-2 xl:grid-cols-4  gap-5 items-center padding py-20">
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
      </div>
    </section>
  );
};

export default Youtube;
