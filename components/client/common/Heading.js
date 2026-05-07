"use client";

const Heading = ({ title = "", type = "" }) => {
  return (
    <section className="h-[30vh] xl:h-[50vh] w-full padding bg-(--bg-dark) flex justify-center items-end pt-20 pb-5">
      <h2
        className={`${type === "treatment" ? "text-[8vw] leading-[8vw]" : "text-[15vw] leading-[15vw]"} text-(--text-white) font-bold`}
      >
        {title}
      </h2>
    </section>
  );
};

export default Heading;
