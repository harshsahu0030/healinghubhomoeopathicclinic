import BlogContent from "@/components/client/blog/BlogContent";
import Heading from "@/components/client/common/Heading";
import { getSingleBlog } from "@/lib/graphql/blog";

const page = async ({ params }) => {
  const sParams = await params;

  const blogContent = await getSingleBlog(sParams?.blogSlug);

  return (
    <>
      <Heading title={blogContent?.title} type="blog" />

      <section className="padding py-20 h-full w-full ">
        <BlogContent blogContent={blogContent} />
      </section>
    </>
  );
};

export default page;
