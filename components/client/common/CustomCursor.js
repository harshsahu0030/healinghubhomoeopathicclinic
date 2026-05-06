"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // 1. Initial State (Start completely hidden so it doesn't get stuck in the top left corner on load)
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set([imageRef.current, textRef.current], { scale: 0, opacity: 0 });

    // 2. Movement
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      // Fade in the cursor on the very first mouse move
      if (cursorRef.current.style.opacity === "0") {
        gsap.to(cursorRef.current, { opacity: 1, duration: 0.3 });
      }
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // 3. Event Delegation for Hover States
    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");

      // FIX: Prevent flicker when moving mouse between children of the same container
      if (target && e.relatedTarget && target.contains(e.relatedTarget)) return;

      if (target) {
        const type = target.dataset.cursor;
        const text = target.dataset.cursorText;
        const img = target.dataset.cursorImage;

        if (type === "video") {
          gsap.to(cursorRef.current, {
            width: "120px",
            height: "120px",
            backgroundColor: "rgba(var(--bg-mint-rgb), 0.7)",
            duration: 0.3,
          });

          if (text) {
            textRef.current.innerText = text;
            gsap.to(textRef.current, {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              delay: 0.1,
            });
          }
        }
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("[data-cursor]");

      // FIX: Prevent flicker when moving mouse between children of the same container
      if (target && e.relatedTarget && target.contains(e.relatedTarget)) return;

      if (target) {
        gsap.to(cursorRef.current, {
          width: "24px",
          height: "24px",
          backgroundColor: "var(--bg-mint)",
          duration: 0.3,
        });

        gsap.to([textRef.current, imageRef.current], {
          scale: 0,
          opacity: 0,
          duration: 0.2,
        });
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden xl:flex fixed top-0 left-0 pointer-events-none z-[9999] items-center justify-center overflow-hidden h-6 w-6 rounded-full bg-(--bg-mint)"
      style={{ willChange: "transform, width, height, opacity" }}
    >
      <span
        ref={textRef}
        className="absolute z-10 text-sm font-bold flex justify-center items-center text-center p-2 text-(--text-dark)"
      ></span>

      <img
        ref={imageRef}
        src=""
        alt=""
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
    </div>
  );
}
