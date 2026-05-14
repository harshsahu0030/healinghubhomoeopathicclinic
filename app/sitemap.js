// app/sitemap.js
import { getBlogListSeo } from "@/lib/graphql/blog";
import { getTreatmentsList } from "@/lib/graphql/treatment";

export default async function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://healinghubhomoeopathicclinic.com";

  // 1. Fetch Dynamic Data from WordPress
  const [treatments, blogs] = await Promise.all([
    getTreatmentsList(),
    getBlogListSeo(),
  ]);

  // 2. Map Treatments
  const treatmentUrls = treatments.map((treatment) => ({
    url: `${baseUrl}/our-treatments/${treatment.slug}`,
    lastModified: treatment.modified || new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. Map Blogs
  const blogUrls = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.modified || new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 4. Static Pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`, // The main blog listing page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`, // The main blog listing page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-treatments`, // The main blog listing page
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  return [...staticRoutes, ...treatmentUrls, ...blogUrls];
}
