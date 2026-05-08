import Image from "next/image";
import React from "react";
import { parseISO, format } from "date-fns";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <article className="h-[60vh] w-full p-5 rounded-lg bg-(--bg-light) flex flex-col gap-5 shadow-lg">
      <div className="flex-3 overflow-hidden rounded-lg">
        <Image
          src={blog?.featuredImage?.node?.sourceUrl}
          alt={blog?.featuredImage?.node?.altText}
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-2 flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-(--primary-forest) ">
          <time
            className="flex items-center gap-2 text-sm italic "
            dateTime={blog?.date}
          >
            {format(parseISO(blog?.date), "LLL d, yyyy")}
          </time>{" "}
          ,<address>{blog?.author?.node?.name}</address>
        </div>
        <h2 className="text-lg font-semibold">
          <Link href={`/blog/${blog?.slug}`}>{blog?.title}</Link>
        </h2>

        <Link
          href={`/blog/${blog?.slug}`}
          className="font-semibold underline text-(--primary-forest) "
        >
          Read More
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
