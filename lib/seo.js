import * as cheerio from "cheerio";

function parseRankMathHead(html) {
  if (!html) return {};
  const $ = cheerio.load(html);

  return {
    description: $('meta[name="description"]').attr("content"),
    canonical: $('link[rel="canonical"]').attr("href"),
    ogTitle: $('meta[property="og:title"]').attr("content"),
    ogDescription: $('meta[property="og:description"]').attr("content"),
    ogImage: $('meta[property="og:image"]').attr("content"),
    ogType: $('meta[property="og:type"]').attr("content"),
    twitterCard: $('meta[name="twitter:card"]').attr("content"),
    schema: $("script.rank-math-schema").html(),
  };
}

export default async function getSeo(slug) {
  // 1. Build the correct URL for the Rank Math API
  const baseUrl = "https://content.healinghubhomoeopathicclinic.com";
  const apiUrl = `${baseUrl}/wp-json/rankmath/v1/getHead?url=${baseUrl}/${slug}`;

  try {
    const res = await fetch(apiUrl, {
      method: "GET",
      next: { revalidate: 8400 },
    });

    if (!res.ok) return null;

    const resJson = await res.json();

    // 2. Convert the HTML string in 'head' into a clean Object
    return parseRankMathHead(resJson?.head);
  } catch (error) {
    console.error("SEO Fetch Error:", error);
    return null;
  }
}
