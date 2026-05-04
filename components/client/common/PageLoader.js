"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const PageLoader = ({ children }) => {
  const pathname = usePathname();
  const loaderRef = useRef();
  const pageRef = useRef();

  useGSAP(
    () => {
      let tl = gsap.timeline({});

      tl.to(
        loaderRef.current,
        {
          display: "block",
        },
        "same",
      )
        .from(
          ".stair",
          {
            height: 0,
            ease: "power4.inOut",
            stagger: {
              amount: -0.25,
            },
          },
          "same",
        )
        .to(".stair", {
          y: "100%",
          ease: "power4.inOut",
          stagger: {
            amount: 0.25,
          },
        })
        .to(loaderRef.current, {
          display: "none",
        })
        .to(".stair", {
          y: 0,
        });

      gsap.from(pageRef.current, {
        opacity: 0,
        ease: "power4.inOut",
        delay: 1,
      });
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
    },
  );

  return (
    <>
      <div
        ref={loaderRef}
        className="fixed top-0 left-0 h-screen w-full  z-9999"
      >
        <div className="h-full w-full flex">
          {new Array(6).fill(0).map((_, index) => (
            <div
              key={index}
              className="stair h-screen w-1/6 bg-(--bg-dark)"
            ></div>
          ))}
        </div>
      </div>

      <div className="h-full w-full flex flex-col gap-10 " ref={pageRef}>
        {children}
      </div>
    </>
  );
};

export default PageLoader;
