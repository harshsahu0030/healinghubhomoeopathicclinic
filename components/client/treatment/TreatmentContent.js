"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const TreatmentContent = ({ treatment = {} }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-10 p-5 bg-(--bg-light) rounded-lg">
      <div className="w-full p-4 border-b border-(--bg-dark)/40">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-1 font-medium cursor-pointer px-5 py-1 rounded-full border-2"
        >
          <IoIosArrowBack /> Back to Feed
        </button>
      </div>

      <Image
        src={`https://content.healinghubhomoeopathicclinic.com${treatment?.featuredImage?.node?.filePath}`}
        alt={treatment?.featuredImage?.node?.altText}
        width={600}
        height={600}
        className="h-[50vh] w-full object-contain rounded-lg"
      />

      <div
        className="post-content h-full w-full"
        dangerouslySetInnerHTML={{ __html: treatment?.content }}
      />
    </div>
  );
};

export default TreatmentContent;
