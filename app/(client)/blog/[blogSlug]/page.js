import BlogContent from "@/components/client/blog/BlogContent";
import Heading from "@/components/client/common/Heading";
import { siteConfig } from "@/data/siteConfig";

import { getSingleBlog } from "@/lib/graphql/blog";
import getSeo from "@/lib/seo";

// SEO Metadata
export async function generateMetadata({ params }) {
  const sParams = await params;
  const slug = sParams?.blogSlug;

  const seoData = await getSeo(`${slug}`);

  // 1. Fixed the fallback text (It said "Blog" before)
  if (!seoData) {
    return {
      title: "Our Blog",
      description: "Explore our  Blog.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    title: seoData.ogTitle,
    description: seoData?.description,

    metadataBase: new URL(siteUrl),

    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },

    openGraph: {
      title: seoData.ogTitle,
      description: seoData.ogDescription,
      url: `${siteUrl}/our-treatments/${slug}`,
      type: seoData.ogType || "website",
      siteName: siteConfig?.name || "Healing Hub",
      locale: "en_IN",
      images: [
        {
          url: seoData?.ogImage || siteConfig.doctorImages[0].url,
        },
      ],
    },

    twitter: {
      card: seoData?.twitterCard || "summary_large_image",
      title: seoData.ogTitle,
      description: seoData.ogDescription,
      images: [
        {
          url: seoData?.ogImage || siteConfig.doctorImages[0].url,
        },
      ],
    },
  };
}

const Page = async ({ params }) => {
  const sParams = await params;
  const blogContent = await getSingleBlog(sParams?.blogSlug);
  const seoData = await getSeo(sParams?.blogSlug);

  if (blogContent) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: seoData?.schema,
          }}
        />

        <Heading title={blogContent?.title} type="blog" />

        <section className="padding py-20 h-full w-full">
          <BlogContent blogContent={blogContent} />
        </section>
      </>
    );
  }
};

export default Page;
