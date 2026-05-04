import { getTestimonialsList } from "@/lib/graphql/testimonials";
import { getTreatmentsList } from "@/lib/graphql/treatment";

const page = async () => {
  const treatments = await getTreatmentsList();
  const testimonials = await getTestimonialsList();

  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="flex flex-col  p-5 border-2">
        {treatments?.map((treatment) => (
          <div key={treatment?.slug} className="">
            {treatment?.title}
          </div>
        ))}
      </div>
      <div className="flex flex-col  p-5 border-2">
        {testimonials?.map((testimonial, index) => (
          <div key={index} className="">
            {testimonial?.testimonialAddons?.clientName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
