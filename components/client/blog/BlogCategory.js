import React from "react";
import { MdCategory } from "react-icons/md";

const BlogCategory = ({ catgeories }) => {
  return (
    <div className="h-fit w-full p-5 bg-(--bg-light) flex flex-col gap-5">
      <h2 className="flex items-center gap-2 text-lg font-semibold"><MdCategory /> Categories</h2>

      <hr className="border border-(--bg-dark)/40" />

      <ul className="flex flex-col gap-2 ">
        {catgeories?.map((item) => (
          <li
            key={item?.uri}
            className="flex items-center gap-2 text-base cursor-pointer font-medium hover:text-(--accent-clay) transition-all duration-300"
          >
            <MdCategory /> {item?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategory;
