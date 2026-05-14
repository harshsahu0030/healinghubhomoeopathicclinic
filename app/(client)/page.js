import Home from "@/components/client/home/Home";
import { siteConfig } from "@/data/siteConfig";
import { getTreatmentsList } from "@/lib/graphql/treatment";

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
