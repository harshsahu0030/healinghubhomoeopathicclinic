import Home from "@/components/client/home/Home";
import { siteConfig } from "@/data/siteConfig";
import { getTreatmentsList } from "@/lib/graphql/treatment";

// SEO Metadata
export async function generateMetadata({ params }) {
  const sParams = await params;

  // 1. Fixed the fallback text (It said "Blog" before)
  const siteUrl = "https://healinghubhomoeopathicclinic.com";

  return {
    title: "",
    description: "",
    keywords: ["", ""],

    metadataBase: new URL(siteUrl),

    alternates: {
      canonical: `${siteUrl}`,
    },

    openGraph: {
      title: "",
      description: "",
      url: `${siteUrl}`,
      type: "website",
      siteName: "Healing Hub",
      locale: "en_IN",
      images: [""],
    },

    twitter: {
      card: "summary_large_image",
      title: "",
      description: "",
      images: [
        {
          url: siteConfig.doctorImages[0].url,
        },
      ],
    },
  };
}

const page = async () => {
  const treatments = await getTreatmentsList();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteConfig?.localBusinessSchema),
        }}
      />
      <Home treatments={treatments} />;
    </>
  );
};

export default page;
