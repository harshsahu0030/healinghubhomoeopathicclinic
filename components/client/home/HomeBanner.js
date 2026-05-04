"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import HeroImage01 from "@/public/hero-image01.jpeg";
import Link from "next/link";
import DoctorImage from "@/public/doctor-01.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { siteConfig } from "@/data/siteConfig";
import { FaAngleDown } from "react-icons/fa6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const HomeBanner = ({ treatments = [] }) => {
  const bannerRef = useRef(null);

  const [down, setDown] = useState("Please Wait");

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          setDown("Scroll Down");
        },
      });

      let split = SplitText.create("#home-banner-heading", {
        type: "chars, words, lines",
      });

      tl.from(split.chars, {
        opacity: 0,
        stagger: 0.02,
      })
        .from("#home-banner-holistic", {
          y: 100,
          opacity: 0,
        })
        .from(
          "#home-banner-box",
          {
            opacity: 0,
            scale: 0.8,
          },
          "home-banner",
        )
        .fromTo(
          ".home-banner-btn",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            stagger: 0.2,
          },
          "home-banner",
        );
    },

    {
      scope: bannerRef,
    },
  );

  return (
    <div
      ref={bannerRef}
      className="relative h-full w-full overflow-hidden px-5 py-20 xl:px-20 xl:py-40"
    >
      <Image
        src={HeroImage01}
        alt={siteConfig?.name}
        layout="fill"
        objectFit="cover object-right"
        className="brightness-50 absolute top-0 left-0 w-full h-full -z-1"
        placeholder="blur"
        priority
      />

      <span
        id="home-banner-holistic"
        className=" absolute  left-1/2 -translate-x-1/2 bottom-0 xl:bottom-[-10%]  text-[20vw] font-bold text-(--secondary-sage) uppercase tracking-wide opacity-50 -z-1"
      >
        HOLISTIC
      </span>

      <span className="absolute bottom-10  left-1/2 -translate-x-1/2 text-(--text-white)  z-50 flex items-center gap-2 animate-bounce">
        {down} <FaAngleDown />
      </span>

      <div className="w-full h-full grid grid-cols-1 xl:grid-cols-12 gap-20">
        {/* left  */}
        <div className="xl:col-span-8 flex flex-col gap-10 justify-between">
          <h1
            id="home-banner-heading"
            className=" text-2xl xl:text-5xl font-semibold text-(--text-white) leading-snug"
          >
            Tired of Recurring Health Problems?
            <br /> Treat the Root Cause Naturally —
            <br /> Not Just the Symptoms
          </h1>

          <div className="hidden md:flex flex-wrap gap-5 text-(--text-white) font-medium">
            {treatments?.slice(0, 5)?.map((treatment, index) => (
              <Link
                key={index}
                href={`/our-treatments/${treatment?.slug}`}
                className="btn bg-(--bg-light)/30 backdrop-blur-md text-sm home-banner-btn"
              >
                {treatment?.title}
              </Link>
            ))}
            <Link
              href={`/our-treatments`}
              className="btn bg-(--bg-light)/30 backdrop-blur-md text-sm home-banner-btn"
            >
              View All
            </Link>
          </div>
        </div>

        {/* right  */}
        <div
          id="home-banner-box"
          className="xl:col-span-4 flex flex-col justify-center gap-5 text-(--text-white) "
        >
          <Link
            href="/contact-us"
            className="btn bg-(--bg-mint) text-(--text-dark) uppercase text-sm"
          >
            Book a Consultation
          </Link>

          <p className="text-lg">
            Get safe, personalized homeopathic treatment at HealingHub
            Multi-Speciality Homoeopathic Clinic — designed for long-term relief
            without side effects.
          </p>

          <hr className="border border-(--text-white)" />

          <div className="opacity-80 grid grid-cols-12 gap-5 md:w-100 items-center h-50 bg-(--bg-light) rounded-lg overflow-hidden p-2">
            <Image
              src={DoctorImage}
              alt={siteConfig?.name}
              width={800}
              height={800}
              className="h-full w-full object-cover col-span-5"
              priority
            />
            <div className="flex flex-col h-full justify-center col-span-7 gap-1 text-(--text-dark)">
              <p className="xl:text-lg font-semibold">Dr. Mohd Aadil K. Khan</p>
              <i className="">
                Your health is treated individually — not generically.
              </i>
              <Link
                href="/about-us"
                className="text-sm text-(--primary-forest) hover:underline  font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
