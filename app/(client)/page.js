import { getBlog } from "@/lib/getBlog";
import { getTestimonials } from "@/lib/getTestimonial";
import { getTreatments } from "@/lib/getTreatments";

const page = async () => {
  const treatments = await getTreatments();
  const testimonials = await getTestimonials();
  const blog = await getBlog();

  return (
    <div className="flex flex-col gap-5 p-10">
      <div className="flex flex-col  p-5 border-2">
        {treatments?.map((treatment) => (
          <div key={treatment?.id} className="">
            {treatment?.title?.rendered}
          </div>
        ))}
      </div>
      <div className="flex flex-col  p-5 border-2">
        {testimonials?.map((testimonial) => (
          <div key={testimonial?.id} className="">
            {testimonial?.title?.rendered}
          </div>
        ))}
      </div>
      <div className="flex flex-col  p-5 border-2">
        {blog?.map((blog) => (
          <div key={blog?.id} className="">
            {blog?.title?.rendered}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
