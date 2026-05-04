import { getBlog } from "@/lib/getBlog";
import { getTestimonials } from "@/lib/getTestimonial";
import { getTreatments } from "@/lib/getTreatments";

const page = async () => {
  const treatments = await getTreatments();
  const testimonials = await getTestimonials();
  const blog = await getBlog();

  console.log(treatments);
  console.log(testimonials);
  console.log(blog);

  return <div className="flex flex-col gap-5 p-10"></div>;
};

export default page;
