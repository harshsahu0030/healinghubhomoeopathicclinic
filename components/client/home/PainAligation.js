"use client";

import Link from "next/link";
import Image from "next/image";

import Pain01 from "@/public/pain01.jpeg";
import Pain02 from "@/public/pain02.jpeg";
import Pain03 from "@/public/pain03.jpeg";
import Pain04 from "@/public/pain04.jpeg";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Marquee from "../common/Marquee";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const PainAgitation = () => {
  const painRef = useRef();

  const painPoints = [
    {
      name: "Root cause treatment (not temporary fixes)",
      url: Pain01,
    },
    {
      name: "100% safe, natural medicines",
      url: Pain02,
    },
    {
      name: "Personalized consultation for every patient",
      url: Pain03,
    },
    {
      name: "Growing trust through Instagram awareness",
      url: Pain04,
    },
  ];

  useGSAP(
    () => {
      let painSplit = SplitText.create(".pain-split", {
        type: "chars, words, lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: painRef.current,
          start: "top 80%",
          end: "30% 50%",
          scrub: 2,
        },
      });

      tl.from(painSplit.chars, {
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: painRef },
  );

  return (
    <div ref={painRef} className="h-full w-full flex flex-col">
      {/* Top  */}
      <h3 className="pain-split font-medium text-lg">Pain & Agitation</h3>

      <div className="grid md:grid-cols-2 gap-5">
        <h2 className="pain-split text-3xl md:text-5xl font-semibold leading-tight">
          Why Your Problem Keeps <br /> Coming Back?
        </h2>

        <p className="pain-split">
          Are you tired of dealing with the same health problem again and again?
          You take medicines, feel better for a while, but the issue keeps
          coming back. This cycle of temporary relief can be frustrating,
          affecting your daily life, energy, and peace of mind. The real problem
          isn’t you — it’s that the root cause is never properly treated.
        </p>
      </div>

      {/* Bottom*/}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">
        {/* left  */}
        <div className="col-span-5 flex flex-col justify-between gap-10">
          <div className="flex -space-x-4 rtl:space-x-reverse items-center">
            {painPoints.map((item, index) => (
              <Image
                key={index}
                src={item.url}
                alt={item.name}
                objectFit="cover"
                height={50}
                width={50}
                className="w-10 h-10 rounded-full border-2 border-(--primary-forest) object-cover"
                placeholder="blur"
              />
            ))}

            <Link
              href={"/"}
              className="w-10 h-10 rounded-full border-2 border-(--primary-forest) object-cover flex items-center justify-center bg-(--accent-clay) font-medium"
            >
              +99
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <p className="pain-split text-lg font-medium">
              You feel better for a while, but the same health problem keeps
              coming back again and again
            </p>
            <Link
              href="/"
              className="btn bg-(--primary-forest) text-(--text-white)"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        {/* right  */}
        <div className="col-span-7 h-50 xl:h-80">
          <Marquee data={painPoints} />
        </div>
      </div>
    </div>
  );
};

export default PainAgitation;
