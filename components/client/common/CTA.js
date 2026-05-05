"use client";

import { useCursor } from "@/context/CursorContext";
import Link from "next/link";

const CTA = () => {
  const { updateCursor, resetCursor } = useCursor();

  return (
    <section
      className="padding h-full w-full my-10"
      onMouseEnter={() =>
        updateCursor({
          cursorClass: "h-30 w-30 rounded-full bg-(--bg-mint)/70",
          text: "Book a Consultation",
          textClass: "text-(--text-dark)",
        })
      }
      onMouseLeave={resetCursor}
    >
      <div className="flex flex-col items-center gap-8 h-full w-full px-10 py-20 rounded-lg bg-(--bg-dark) text-(--text-white)">
        <h2 className="text-center text-3xl xl:text-6xl">
          Start Your Natural Healing Journey Today
        </h2>
        <p className="text-center text-lg">
          If you are looking for a trusted homeopathy clinic in Govandi, Mumbai,
          HealingHub is here to help. Book your consultation with Dr. Mohd Aadil
          K. Khan and take the first step toward safe, natural, and lasting
          relief.
        </p>
        <Link
          href="/contact-us"
          className="btn bg-(--primary-forest) text-(--text-white)"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
};

export default CTA;
