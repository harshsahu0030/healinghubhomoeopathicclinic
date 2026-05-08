"use client";

import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const BlogSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [text, setText] = useState(searchParams.get("q")?.toString() || "");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const params = new URLSearchParams(searchParams);

      if (text) {
        params.set("q", text);
        params.delete("c");
        params.delete("p");
      } else {
        params.delete("q");
      }

      replace(`${pathname}?${params.toString()}`);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [text, searchParams, pathname, replace]);

  return (
    <div className="w-full h-fit p-5 bg-(--bg-light) flex flex-col gap-5 rounded-lg shadow-lg">
      <div className="w-full flex justify-between items-center  gap-2">
        <label
          htmlFor="blogSearchInput"
          className=" text-lg font-semibold flex items-center gap-2 cursor-pointer"
        >
          <FiSearch /> Search Blog
        </label>

        <Link className="underline italic" href={"/blog"}>
          Reset Filters
        </Link>
      </div>

      <div className="flex items-center gap-2 flex-nowrap">
        <input
          id="blogSearchInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type here..."
          className="h-full p-2 rounded-lg border border-(--bg-dark)/40 text-black w-full"
        />
        <button
          role="button"
          className="h-full py-2 px-6 bg-(--primary-forest) text-(--text-white) flex items-center justify-center rounded-lg font-semibold text-sm cursor-pointer focus:bg-(--primary-forest)/90"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default BlogSearch;
