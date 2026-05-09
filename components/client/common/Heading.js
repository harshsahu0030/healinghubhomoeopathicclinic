"use client";

const Heading = ({ title = "", type = "" }) => {
  return (
    <section className="h-[30vh] xl:h-[50vh] w-full padding bg-(--bg-dark) flex justify-center items-end pb-10">
      <h1
        className={`${type === "treatment" ? "text-[8vw] leading-[8vw]" : type === "blog" ? "text-[5vw] leading-[5vw]" : "text-[15vw] leading-[15vw]"} text-(--text-white) font-bold`}
      >
        {title}
      </h1>
    </section>
  );
};

export default Heading;
