import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import { getTreatmentsList } from "@/lib/graphql/treatment";

export default async function RootLayout({ children }) {
  const treatments = await getTreatmentsList();

  return (
    <>
      <Header />
      {children}
      <Footer treatments={treatments} />
    </>
  );
}
