"use client";

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Faq = ({ data = {} }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-5 bg-(--bg-light) p-4 rounded-lg">
      <h3
        className="font-medium text-base md:text-lg flex items-center justify-between gap-5 cursor-pointer"
        onClick={() => setShow((prev) => !prev)}
      >
        {data?.question}
        {show ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </h3>
      {show && <p className="">{data?.answer}</p>}
    </div>
  );
};

export default Faq;
