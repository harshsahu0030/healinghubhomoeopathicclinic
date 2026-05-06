import Heading from "@/components/client/common/Heading";
import Treatments from "@/components/client/common/Treatment";
import { getTreatmentsList } from "@/lib/graphql/treatment";

const page = async () => {
  const treatments = await getTreatmentsList();

  return (
    <>
      <Heading title="Treatments" />
      <Treatments treatments={treatments} />
    </>
  );
};

export default page;
