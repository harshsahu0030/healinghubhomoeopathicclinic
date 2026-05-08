import BlogCard from "@/components/client/blog/BlogCard";
import BlogCategory from "@/components/client/blog/BlogCategory";
import BlogPageButton from "@/components/client/blog/BlogPageButton";
import BlogSearch from "@/components/client/blog/BlogSearch";
import Heading from "@/components/client/common/Heading";
import { getBlogCategories, getBlogList } from "@/lib/graphql/blog";

const page = async ({ params }) => {
  const blog = await getBlogList();
  const blogCategories = await getBlogCategories();

  return (
    <>
      <Heading title="Our Blog" />

      <section className="padding py-20 h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* left  */}

        <div className="w-full lg:col-span-8 flex flex-col gap-10">
          <BlogSearch />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {blog?.nodes?.map((item, index) => (
              <BlogCard key={index} blog={item} />
            ))}
          </div>
          <BlogPageButton />
        </div>

        {/* right  */}
        <aside className="w-full lg:col-span-4 flex flex-col gap-5">
          <BlogCategory catgeories={blogCategories} />
        </aside>
      </section>
    </>
  );
};
export default page;
