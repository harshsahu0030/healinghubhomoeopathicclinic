"use client";

import Link from "next/link";
import { useRef } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";

const Doctor = () => {
  const docRef = useRef();

  return (
    <div ref={docRef} className="w-full h-w-full">
      <div className="padding flex flex-col gap-10">
        {/* top  */}

        <div className="flex flex-col gap-5 text-(--text-white) col-span-8">
          <div className="flex flex-col gap1">
            <h3 className="font-medium text-lg">Meet Your Homoeopath</h3>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Dr. Mohd Aadil K. Khan
            </h2>
          </div>

          <p>
            Dr. Mohd Aadil K. Khan am passionate about helping you reclaim your
            health through gentle, natural therapies. Every patient deserves
            attentive care and a personalised approach.
          </p>
          <p>
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
      </div>

      {/* bottom  */}
      <div className=""></div>
    </div>
  );
};

export default Doctor;
