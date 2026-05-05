"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const Marquee = ({ data = [] }) => {
  const marqueeRef = useRef(null);

  useGSAP(
    () => {
      const el = marqueeRef.current;
      if (!el) return;

      const totalWidth = el.scrollWidth / 2;

      const tween = gsap.to(el, {
        x: -totalWidth,
        duration: 25,
        ease: "linear",
        repeat: -1,
      });

      const enter = () => tween.timeScale(0.5);
      const leave = () => tween.timeScale(1);

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);

      return () => {
        tween.kill();
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      };
    },
    { scope: marqueeRef },
  );

  return (
    <div className="overflow-hidden h-full w-full">
      <div
        ref={marqueeRef}
        className="flex h-full w-max whitespace-nowrap gap-4"
      >
        {new Array(2).fill("").map((_, index) =>
          data?.map((item, index) => (
            <div
              key={index}
              className="relative h-full min-w-100 max-w-100 rounded-lg overflow-hidden"
            >
              {item?.url ? (
                <Image
                  src={item?.url}
                  alt="healing hub homoeopathic clinic"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover col-span-5 hover:scale-125 transition-all ease-in-out duration-500"
                />
              ) : null}

              {item?.name ? (
                <p className="absolute  bg-(--primary-forest)/30 backdrop-blur-sm right-5 top-5 left-5 rounded-lg p-2 text-lg text-(--text-white) font-medium text-wrap w-fit">
                  {item?.name}
                </p>
              ) : null}
            </div>
          )),
        )}
      </div>
    </div>
  );
};

export default Marquee;
