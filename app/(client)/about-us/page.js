import Doctor from "@/components/client/common/Doctor";
import Heading from "@/components/client/common/Heading";
import Treatments from "@/components/client/treatment/Treatment";
import Youtube from "@/components/client/common/Youtube";
import { getTreatmentsList } from "@/lib/graphql/treatment";

const page = async () => {
  const treatments = await getTreatmentsList();

  return (
    <>
      <Heading title="About Us" />
      <Youtube />
      <Doctor />
      <Treatments treatments={treatments} />
    </>
  );
};

export default page;
