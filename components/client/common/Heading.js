import React from "react";

const Heading = ({ title = "" }) => {
  return (
    <section className="h-[30vh] xl:h-[50vh] w-full padding bg-(--bg-dark) flex justify-center items-end pt-20 pb-5">
      <h2 className="text-[15vw] text-(--text-white) font-bold leading-[20vw]">
        {title}
      </h2>
    </section>
  );
};

export default Heading;
