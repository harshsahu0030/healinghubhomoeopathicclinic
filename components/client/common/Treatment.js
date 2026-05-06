"use client";

import Link from "next/link";
import { GrNext } from "react-icons/gr";
import Treatment from "@/public/treatment.jpeg";
import Image from "next/image";

const Treatments = ({ treatments = [] }) => {
  return (
    <section className="padding h-full w-full grid grid-cols-1 xl:grid-cols-12 gap-5">
      {/* left  */}
      <div className="col-span-5 flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium text-lg ">Conditions We Treat</h3>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight ">
            Each treatment is fully personalized to your body
          </h2>
        </div>

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

      {/* center  */}
      <div className="col-span-4">
        <Image
          src={Treatment}
          alt="healing hub homoeopathic clinic"
          width={600}
          height={600}
          className="h-full object-cover w-full col-span-5 rounded-lg"
        />
      </div>

      {/* right  */}
      <div className="col-span-3 flex flex-col justify-between gap-5">
        <div className="flex flex-col gap-5">
          <p className="">
            At HealingHub Multi-Speciality Homoeopathic Clinic in Govandi,
            Mumbai, we provide effective homeopathic treatment for a wide range
            of acute and chronic conditions including skin problems, allergies,
            asthma, sinus issues, digestive disorders, hair fall, hormonal
            imbalances, and lifestyle-related diseases.
          </p>
          <p className="">
            As a trusted homeopathy doctor in Mumbai, Dr. Mohd Aadil K. Khan
            focuses on personalized treatment that targets the root cause,
            helping patients achieve long-term relief and improved overall
            health naturally. If you are looking for the best homeopathy clinic
            in Govandi or a reliable homeopathic doctor near you in Mumbai,
            HealingHub offers safe, gentle, and result-oriented care.
          </p>
        </div>

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

export default Treatments;
