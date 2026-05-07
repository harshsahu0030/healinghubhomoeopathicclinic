"use client";

import Link from "next/link";
import React from "react";
import { GrNext } from "react-icons/gr";

const TreatmentList = ({ treatments = "" }) => {
  return (
    <div className="h-full w-full">
      <ul className="group flex flex-col gap-3">
        {treatments?.map((treatment, index) => (
          <li key={index} className="w-full">
            <Link
              href={`/our-treatments/${treatment?.slug}`}
              className="flex items-center justify-between gap-5 font-medium text-base xl:text-xl px-6 py-3 bg-(--bg-light) rounded-lg transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-50 hover:opacity-100! hover:text-(--text-dark) hover:bg-(--accent-clay)"
            >
              <span>
                {String(index + 1).padStart(2, "0")} / {treatment?.title}
              </span>

              <GrNext />
            </Link>
          </li>
        ))}
        <li className="w-full">
          <Link
            href="/our-treatments"
            className="flex items-center justify-between gap-5 font-medium text-base xl:text-xl px-6 py-3 bg-(--bg-light) rounded-lg transition-all duration-300 ease-in-out opacity-100 group-hover:opacity-30 hover:opacity-100! hover:bg-(--accent-clay)"
          >
            <span>View All</span>

            <GrNext />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TreatmentList;
