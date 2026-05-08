import Heading from "@/components/client/common/Heading";
import TreatmentContent from "@/components/client/treatment/TreatmentContent";
import TreatmentList from "@/components/client/treatment/TreatmentList";
import { getTreatment, getTreatmentsList } from "@/lib/graphql/treatment";

const page = async ({ params }) => {
  const { treatmentSlug } = await params;

  const treatment = await getTreatment(treatmentSlug);
  const treatments = await getTreatmentsList();

  return (
    <>
      <Heading title={treatment?.title} type="treatment" />

      <section className="padding py-20 h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* left  */}
        <div className="w-full lg:col-span-8">
          <TreatmentContent treatment={treatment} />
        </div>

        {/* right  */}
        <aside className="w-full lg:col-span-4 flex flex-col gap-5">
          <h3 className="tflex items-center justify-between gap-5 font-bold text-2xl px-6 py-3 bg-(--bg-light) rounded-lg ">
            Our Treatments
          </h3>
          <TreatmentList treatments={treatments} />
        </aside>
      </section>
    </>
  );
};
export default page;
