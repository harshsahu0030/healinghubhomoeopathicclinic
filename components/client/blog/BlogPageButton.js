import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogPageButton = () => {
  return (
    <div className="h-fit w-full p-5 bg-(--bg-light) rounded-lg shadow-lg flex justify-between items-center gap-5">
      <button
        disabled
        className="h-full text-lg cursor-pointer hover:scale-110 transition-all focus:scale-110 py-1 px-4 bg-(--primary-forest)  text-(--bg-light) rounded-lg font-semibold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoIosArrowBack /> Prev
      </button>
      <button className="h-full text-lg cursor-pointer hover:scale-110 transition-all focus:scale-110 py-1 px-4 bg-(--primary-forest)  text-(--bg-light) rounded-lg font-semibold flex items-center gap-2">
        Next <IoIosArrowForward />
      </button>
    </div>
  );
};

export default BlogPageButton;
