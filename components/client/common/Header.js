"use client";

import Image from "next/image";
import Logo from "@/public/logo-trans-hor.webp";
import { IoMenu } from "react-icons/io5";
import Navbar from "./Navbar";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef();
  const headerRef = useRef(null);

  // gsap
  useGSAP(() => {
    const showAnim = gsap
      .from(headerRef.current, {
        yPercent: -100,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1 || self.scroll() < 50) {
          showAnim.play(); // Show the header
        } else {
          showAnim.reverse(); // Hide the header
        }
      },
    });
  });

  useGSAP(
    () => {
      const tl = gsap.timeline();

      if (isOpen) {
        document.body.classList.add("overflow-hidden");

        tl.to(navRef.current, {
          right: 0,
          duration: 0.5,
          ease: "power4.inOut",
        });
      } else {
        document.body.classList.remove("overflow-hidden");

        tl.to(navRef.current, {
          right: "-100%",
          duration: 0.5,
          ease: "power4.inOut",
        });
      }
    },
    {
      dependencies: [isOpen],
    },
  );

  return (
    <>
      <header
        ref={headerRef}
        className="h-20 w-full fixed top-0 left-0  z-999 flex padding items-center justify-between  xl:py-2 gap-5"
      >
        <div className="h-full w-[50%] flex justify-start items-center">
          <Link href="/" className="h-full w-full">
            <Image
              src={Logo}
              alt="healinghub logo"
              height={500}
              width={500}
              className="h-full w-fit object-contain"
            />
          </Link>
        </div>

        <button
          className="flex items-center justify-center gap-2 btn text-(--text-white) border-2 py-1 px-6 rounded-full text-sm"
          onClick={() => setIsOpen(true)}
        >
          menu
          <IoMenu />
        </button>
      </header>

      <Navbar navRef={navRef} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Header;
