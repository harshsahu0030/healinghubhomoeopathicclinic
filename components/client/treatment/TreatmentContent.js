"use client";

import Image from "next/image";
import React from "react";

const TreatmentContent = ({ treatment = {} }) => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        src={`https://content.healinghubhomoeopathicclinic.com${treatment?.featuredImage?.node?.filePath}`}
        alt={treatment?.featuredImage?.node?.altText}
        width={600}
        height={600}
        className="h-[50vh] w-full object-contain rounded-lg"
      />
    </div>
  );
};

export default TreatmentContent;
