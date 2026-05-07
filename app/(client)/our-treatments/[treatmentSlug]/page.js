import Heading from "@/components/client/common/Heading";
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
        <div className="w-full lg:col-span-8"></div>

        {/* right  */}
        <article className="w-full lg:col-span-4 flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Our Treatments</h2>
          <TreatmentList treatments={treatments} />
        </article>
      </section>
    </>
  );
};
export default page;
