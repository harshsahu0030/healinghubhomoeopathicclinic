import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import PageLoader from "@/components/client/common/PageLoader";
import SmoothScroller from "@/components/client/common/SmoothScroller";
import { getTreatmentsList } from "@/lib/graphql/treatment";

export default async function RootLayout({ children }) {
  const treatments = await getTreatmentsList();

  return (
    <>
      <Header />
      <SmoothScroller>
        <PageLoader>
          {children}
          <Footer treatments={treatments} />
        </PageLoader>
      </SmoothScroller>
    </>
  );
}
