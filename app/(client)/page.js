import Home from "@/components/client/home/Home";
import { getTreatmentsList } from "@/lib/graphql/treatment";

const page = async () => {
  const treatments = await getTreatmentsList();

  return <Home treatments={treatments} />;
};

export default page;
