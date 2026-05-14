import Heading from "@/components/client/common/Heading";
import TreatmentContent from "@/components/client/treatment/TreatmentContent";
import TreatmentList from "@/components/client/treatment/TreatmentList";
import { siteConfig } from "@/data/siteConfig";
import { getTreatment, getTreatmentsList } from "@/lib/graphql/treatment";
import getSeo from "@/lib/seo";

// SEO Metadata
export async function generateMetadata({ params }) {
  const sParams = await params;
  const slug = sParams?.treatmentSlug;

  const seoData = await getSeo(`treatment/${slug}`);

  // 1. Fixed the fallback text (It said "Blog" before)
  if (!seoData) {
    return {
      title: "Our Treatments",
      description: "Explore our homeopathic treatments.",
    };
  }

  const siteUrl = "https://healinghubhomoeopathicclinic.com";

  return {
    title: seoData.ogTitle,
    description: seoData?.description,

    metadataBase: new URL(siteUrl),

    alternates: {
      canonical: `${siteUrl}/our-treatments/${slug}`,
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

const page = async ({ params }) => {
  const { treatmentSlug } = await params;

  const treatment = await getTreatment(treatmentSlug);
  const treatments = await getTreatmentsList();
  const seoData = await getSeo(`treatment/${treatmentSlug}`);

  if (treatments && treatment) {
    return (
      <>
        {seoData?.schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: seoData.schema }}
          />
        )}

        <Heading title={treatment?.title} type="treatment" />

        <section className="padding py-20 h-full w-full grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* left  */}
          <div className="w-full lg:col-span-8">
            <TreatmentContent treatment={treatment} />
          </div>

          {/* right  */}
          <aside className="w-full lg:col-span-4 flex flex-col gap-5">
            <h3 className="tflex items-center justify-between gap-5 font-bold text-2xl px-6 py-3 bg-(--bg-light) rounded-lg ">
              Our Treatments
            </h3>
            <TreatmentList treatments={treatments} />
          </aside>
        </section>
      </>
    );
  }
};
export default page;
