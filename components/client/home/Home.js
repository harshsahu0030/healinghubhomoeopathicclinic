"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import HomeBanner from "./HomeBanner";
import PainAgitation from "./PainAligation";
import HomeVideo from "./HomeVideo";
import Solution from "./Solution";
import Treatments from "../common/Treatment";
import Doctor from "../common/Doctor";
import Faqs from "../common/Faqs";
import Youtube from "../common/Youtube";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Home = ({ treatments = [] }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          let { isDesktop } = context.conditions;

          let dynamicStart = isDesktop ? "top top" : "50% top";

          // Hero Banner
          gsap.to("#home-banner-section", {
            scrollTrigger: {
              trigger: "#home-banner-section",
              start: dynamicStart,
              end: "+=100%",
              pin: true,
              pinSpacing: false,
              scrub: 2,
            },
          });

          // Pain Section
          gsap.to("#home-pain-section", {
            scrollTrigger: {
              trigger: "#home-pain-section",
              start: dynamicStart,
              end: "+=100%",
              pin: true,
              pinSpacing: false,
              scrub: 2,
            },
          });
        },
      );
    },
    {
      scope: containerRef,
    },
  );

  return (
    <div ref={containerRef}>
      <section
        id="home-banner-section"
        className="min-h-screen xl:h-screen w-full relative overflow-hidden px-5 py-20 xl:px-20 xl:py-40"
      >
        <HomeBanner treatments={treatments} />
      </section>

      <HomeVideo />

      <section
        id="home-pain-section"
        className="h-fit w-full relative z-10 padding py-20 bg-(--bg-mint)"
      >
        <PainAgitation />
      </section>

      <section className="h-full min-h-screen w-full bg-(--bg-dark) text-(--text-white) padding py-20 relative z-20 shadow-[0_-20px_30px_rgba(0,0,0,0.2)]">
        <Solution />
      </section>

      <Treatments treatments={treatments} />

      <Youtube containerRef={containerRef} />

      <Doctor />

      <Faqs />
    </div>
  );
};

export default Home;
