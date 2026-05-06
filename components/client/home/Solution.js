"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Solutions01 from "@/public/solution01.png";
import Solutions02 from "@/public/solution02.png";
import Solutions03 from "@/public/solution03.png";
import Solutions04 from "@/public/solution04.png";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Doctor06 from "@/public/doctor/doctor-6.webp";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const Solution = () => {
  const solRef = useRef(null);

  const IntroduceYou = [
    {
      name: "Long-term relief from recurring problems",
      url: Solutions01,
    },
    {
      name: "Improved immunity and overall health",
      url: Solutions02,
    },
    {
      name: "Better lifestyle and confidence",
      url: Solutions04,
    },
    {
      name: "Reduced dependency on repeated medication",
      url: Solutions03,
    },
  ];

  const outcomes = [
    {
      head: "95",
      headEnd: "%",

      line1: "Satisfaction ",
      line2: "Rate",
    },
    {
      head: "7",
      headEnd: "+",
      line1: "Years of ",
      line2: "Experience",
    },
    {
      head: "25",
      headEnd: "k+",
      line1: "Trusted by ",
      line2: "Patients",
    },
    {
      head: "5",
      headEnd: "",
      line1: "Patient ",
      line2: "Experience Rating",
    },
  ];

  useGSAP(
    () => {
      let solSplit = SplitText.create(".sol-split", {
        type: "chars, words, lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: solRef.current,
          start: "top 70%",
          end: "30% 50%",
          scrub: 2,
        },
      });

      tl.from(solSplit.chars, {
        opacity: 0,
        stagger: 0.02,
      });

      gsap.from(".sol-images", {
        opacity: 0,
        y: 50,
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".sol-images",
          start: "top 80%",
          end: "top 70%",
          scrub: 2,
        },
      });

      gsap.from(".sol-counters", {
        opacity: 0,
        y: -50,
        stagger: 0.2,

        scrollTrigger: {
          trigger: ".sol-counters",
          start: "top 80%",
          end: "top 70%",
          scrub: 2,
        },
      });
    },
    { scope: solRef },
  );

  return (
    <div
      ref={solRef}
      className="h-full grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-5"
    >
      {/* left  */}
      <div className="w-full flex flex-col gap-10">
        <div className="w-full h-full top-0 left-0  overflow-hidden sol-images">
          <Image
            src={Doctor06}
            alt="healing hub homoeopathic clinic"
            width={600}
            height={600}
            className="h-full w-full object-cover rounded-lg hover:scale-125 transition-all ease-in-out duration-500"
          />
        </div>

        <div className="w-full  grid grid-cols-2 md:grid-cols-4 gap-5">
          {outcomes?.map((item, index) => (
            <div key={item.head} className="flex flex-col gap-2 sol-counters">
              <div className="text-6xl font-semibold flex items-center">
                <span className="sol-counter">{item.head}</span>
                <span>{item.headEnd}</span>
              </div>
              <span className="uppercase ">
                {item.line1} <br /> {item.line2}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* right  */}
      <div className="h-full w-full flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap1">
            <h3 className="font-medium text-lg sol-split">Introduce Us</h3>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight sol-split">
              Here’s How We Fix It
            </h2>
          </div>

          <p className="sol-split">
            At HealingHub Multi-Speciality Homoeopathic Clinic, Dr. Mohd Aadil
            K. Khan focuses on identifying the root cause of your condition and
            treating it with natural homeopathy. Instead of just suppressing
            symptoms, we take a personalized approach to understand your body,
            lifestyle, and medical history — delivering safe, effective, and
            long-lasting results without harmful side effects.
          </p>

          <Link
            href="/our-treatments/skin-diseases"
            className="btn bg-(--bg-mint) text-(--text-dark)  text-sm"
          >
            Read More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {IntroduceYou?.map((item, index) => (
            <div
              key={index}
              className="relative h-full w-full rounded-lg overflow-hidden sol-images"
            >
              <Image
                src={item.url}
                alt="healing hub homoeopathic clinic"
                width={600}
                height={600}
                className="h-full w-full object-cover col-span-5 hover:scale-125 transition-all ease-in-out duration-500"
              />

              <p className="absolute  bg-(--primary-forest)/30 backdrop-blur-sm right-5 bottom-5 left-5  rounded-lg p-2 text-lg text-(--text-white) font-medium text-wrap w-fit">
                {item?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solution;
