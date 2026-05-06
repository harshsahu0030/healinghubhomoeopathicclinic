"use client";

import { siteConfig } from "@/data/siteConfig";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Link from "next/link";
import { useRef } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import Marquee from "./Marquee";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

const Doctor = () => {
  const { name, doctorImages } = siteConfig;

  const docRef = useRef();

  useGSAP(
    () => {
      let painSplit = SplitText.create(".doc-split", {
        type: "chars, words, lines",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: docRef.current,
          start: "top 80%",
          end: "30% 70%",
          scrub: 2,
        },
      });

      tl.from(painSplit.chars, {
        opacity: 0,
        stagger: 0.02,
      });
    },
    {
      dependencies: [docRef],
    },
  );

  return (
    <section
      ref={docRef}
      className="padding py-20 h-full w-full bg-(--bg-dark)"
    >
      <div className="padding flex flex-col gap-20">
        {/* top  */}
        <div className="flex flex-col gap-5 text-(--text-white) col-span-8">
          <div className="flex flex-col gap1">
            <h3 className="font-medium text-lg doc-split">
              Meet Your Homoeopath
            </h3>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight doc-split">
              {name}
            </h2>
          </div>

          <p className="doc-split">
            Dr. Mohd Aadil K. Khan am passionate about helping you reclaim your
            health through gentle, natural therapies. Every patient deserves
            attentive care and a personalised approach.
          </p>
          <p className="doc-split">
            With expertise in managing both acute and chronic
            conditions—including allergies, digestive issues, skin diseases,
            hormonal imbalances, and emotional health—Dr. Mohd Aadil Khan
            empowers patients of all ages to naturally regain balance and
            vitality.
          </p>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <FaUserDoctor />
              B.H.M.S (Bachelor of Homoeopathic Medicine and Surgery)
            </li>
            <li className="flex items-center gap-2">
              <FaUserGroup />
              Member in HHF (Hahnemannian Homoeo Forum) Mumbai
            </li>
          </ul>

          <Link
            href="/"
            className="btn bg-(--bg-mint) text-(--text-dark)  text-sm"
          >
            Read More
          </Link>
        </div>

        {/* bottom  */}
        <div className="h-[50vh] w-full">
          <Marquee data={doctorImages} />
        </div>
      </div>
    </section>
  );
};

export default Doctor;
