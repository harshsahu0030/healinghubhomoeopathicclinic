import { getTreatments } from "@/lib/getTreatments";

const page = async () => {
  const treatments = await getTreatments();

  return (
    <div className="flex flex-col gap-5 p-10">
      {treatments?.map((treatment) => (
        <div key={treatment?.id} className="flex flex-col gap-2 border-2 p-5">
          <span>{treatment?.title?.rendered}</span>
          <span>{treatment?.slug}</span>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default page;
