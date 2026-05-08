"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HomeV from "@/public/homeVideo.mp4";
import pain02 from "@/public/pain02.jpeg";

const HomeVideo = () => {
  const vidRef = useRef(null);
  const videoRef = useRef(null);

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
      className="relative h-screen w-full hidden xl:flex justify-center items-center"
    >
      <div ref={videoRef} className="w-[50%] h-[50%]">
        <video
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          loop
          muted
          height={500}
          width={500}
          playsInline
          loading="lazy"
          poster={pain02}
        >
          <source src={HomeV} type="video/mp4" />
          <track src={HomeV} />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HomeVideo;
