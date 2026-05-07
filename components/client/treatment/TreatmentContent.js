"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const TreatmentContent = ({ treatment = {} }) => {
  const data = useSearchParams();

  return (
    <div className="flex flex-col gap-5">
      <Image
        src={`https://content.healinghubhomoeopathicclinic.com${treatment?.featuredImage?.node?.filePath}`}
        alt={treatment?.featuredImage?.node?.altText}
        width={600}
        height={600}
        className="w-full"
      />
    </div>
  );
};

export default TreatmentContent;
