export default function robots() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://healinghubhomoeopathicclinic.com";

  return {
    rules: [
      {
        userAgent: "*", // Targeting all crawlers (Google, Bing, etc.)
        allow: "/", // Allow crawling of all public pages
        disallow: [
          "/api/", // Block internal API routes
          "/_next/", // Block Next.js system folders
          "/private/", // Block any specific private folders you may have
        ],
      },
    ],
    // This automatically links your dynamic robots.txt to your dynamic sitemap
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
