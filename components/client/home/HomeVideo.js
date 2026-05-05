"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScollerImage from "@/public/pain04.jpeg";
import { useCursor } from "@/context/CursorContext";

const HomeVideo = () => {
  const vidRef = useRef(null);
  const videoRef = useRef(null);
  const { updateCursor, resetCursor } = useCursor();

  useGSAP(
    () => {
      gsap.to(videoRef.current, {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ease: "power1.inOut",

        scrollTrigger: {
          trigger: vidRef.current,
          start: "top top",
          end: "+=200",
          scrub: 1,
          pin: true,
        },
      });
    },
    { scope: vidRef },
  );

  return (
    <section
      aria-label="home-video"
      ref={vidRef}
      className="relative h-screen w-full flex justify-center items-center"
      onMouseEnter={() =>
        updateCursor({
          cursorClass: "h-30 w-30 rounded-full bg-(--bg-mint)/70",
          text: "Healing Video",
          textClass: "text-(--text-dark)",
        })
      }
      onMouseLeave={resetCursor}
    >
      <div ref={videoRef} className="w-[50%] h-[50%]">
        <Image
          src={ScollerImage}
          alt="hello"
          height={800}
          width={800}
          className="w-full h-full object-cover rounded-lg"
          priority
        />
      </div>
    </section>
  );
};

export default HomeVideo;
