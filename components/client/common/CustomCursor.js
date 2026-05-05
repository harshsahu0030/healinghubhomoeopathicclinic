"use client";

import { useCursor } from "@/context/CursorContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const imageRef = useRef(null);
  const { cursor } = useCursor();

  useGSAP(() => {
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    gsap.set(imageRef.current, {
      scale: 0,
      opacity: 0,
    });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useGSAP(
    () => {
      if (cursor?.image !== "") {
        gsap.from(imageRef.current, {
          scale: 0,
          opacity: 0,
          rotate: 180,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    },
    { dependencies: [cursor?.image] },
  );

  return (
    <div
      ref={cursorRef}
      className={`hidden xl:flex fixed top-0 left-0 pointer-events-none z-9999  items-center justify-center overflow-hidden ${
        cursor?.cursorClass || "h-6 w-6 rounded-full bg-(--bg-mint)"
      }`}
    >
      {cursor?.text ? (
        <span
          className={`relative z-10 text-sm font-semibold flex justify-center items-center text-center p-2 ${cursor?.textClass}`}
        >
          {cursor.text}
        </span>
      ) : null}

      {cursor?.image && (
        <Image
          ref={imageRef}
          src={cursor?.image}
          alt="cursor-image"
          height={300}
          width={300}
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
