"use client";

import React, { useCallback } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogPageButton = ({ pageInfo }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleNavigation = (cursorValue) => {
    const params = new URLSearchParams(searchParams);

    if (cursorValue) {
      params.set("p", cursorValue);
    } else {
      params.delete("p");
    }

    push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="h-fit w-full p-5 bg-(--bg-light) rounded-lg shadow-lg flex justify-between items-center gap-5">
      <button
        onClick={() => handleNavigation(null)} // Resetting or logic for Prev
        className="h-full text-lg cursor-pointer hover:scale-110 transition-all py-1 px-4 bg-(--primary-forest) text-(--bg-light) rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!pageInfo?.hasPreviousPage}
      >
        <IoIosArrowBack /> Prev
      </button>

      <button
        onClick={() => handleNavigation(pageInfo?.endCursor)}
        disabled={!pageInfo?.hasNextPage}
        className="h-full text-lg cursor-pointer hover:scale-110 transition-all py-1 px-4 bg-(--primary-forest) text-(--bg-light) rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next <IoIosArrowForward />
      </button>
    </div>
  );
};

export default BlogPageButton;
