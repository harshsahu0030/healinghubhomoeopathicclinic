import Treatments from "@/components/client/common/Treatment";
import { getTreatmentsList } from "@/lib/graphql/treatment";

const page = async () => {
  const treatments = await getTreatmentsList();

  return (
    <>
      <Treatments treatments={treatments} />
    </>
  );
};

export default page;
