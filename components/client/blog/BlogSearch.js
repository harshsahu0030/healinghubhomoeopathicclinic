import React from "react";
import { FiSearch } from "react-icons/fi";

const BlogSearch = () => {
  return (
    <div className="w-full h-fit p-5 bg-(--bg-light) flex flex-col gap-2 rounded-lg shadow-lg">
      <label
        id="blogSeach"
        className="text-lg font-semibold flex items-center gap-2 cursor-pointer"
      >
        <FiSearch /> Search Blog
      </label>
      <input
        id="blogSeach"
        placeholder="Type here..."
        className="p-2 rounded-lg border border-(--bg-dark)/40"
      />
    </div>
  );
};

export default BlogSearch;
