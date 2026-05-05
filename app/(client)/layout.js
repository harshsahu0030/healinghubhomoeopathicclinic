import CTA from "@/components/client/common/CTA";
import CustomCursor from "@/components/client/common/CustomCursor";
import Footer from "@/components/client/common/Footer";
import Header from "@/components/client/common/Header";
import PageLoader from "@/components/client/common/PageLoader";
import SmoothScroller from "@/components/client/common/SmoothScroller";
import Testimonials from "@/components/client/common/Testimonials";
import { CursorProvider } from "@/context/CursorContext";
import { getTestimonialsList } from "@/lib/graphql/testimonials";
import { getTreatmentsList } from "@/lib/graphql/treatment";

export default async function RootLayout({ children }) {
  const treatments = await getTreatmentsList();
  const testimonials = await getTestimonialsList();

  return (
    <>
      <CursorProvider>
        <CustomCursor />
        <PageLoader>
          <Header />
          <SmoothScroller>
            {children}
            <Testimonials testimonials={testimonials} />
            <CTA />
            <Footer treatments={treatments} />
          </SmoothScroller>
        </PageLoader>
      </CursorProvider>
    </>
  );
}
