import Faq from "./Faq";

const Faqs = ({ faqs = [] }) => {
  return (
    <section className="padding w-full flex gap-5 py-20">
      {/* left  */}
      <div className="flex flex-1 flex-col gap-5">
        <h3 className="font-medium text-lg">Answers you should to know</h3>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Frequently Asked Questions (FAQs)
        </h2>
      </div>

      {/* right  */}
      <div className="flex flex-1 flex-col gap-5">
        <p className="">
          Tired of recurring health issues and unsure what to do next? These
          answers will help you understand how natural homeopathy can finally
          give you lasting relief and peace of mind.
        </p>

        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5 pt-10">
          {faqs?.map((item, index) => (
            <Faq key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
