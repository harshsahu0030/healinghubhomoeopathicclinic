import Image from "next/image";
import Faq from "./Faq";
import FaqsImage from "@/public/doctor-01.png";

const Faqs = ({ faqs = [] }) => {
  return (
    <div className="padding py-20 h-fulll flex flex-col xl:flex-row gap-5">
      {/* left  */}
      <div className="flex flex-1 flex-col gap-5">
        <h3 className="font-medium text-lg">Answers you should to know</h3>

        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Frequently Asked Questions (FAQs)
        </h2>

        <Image
          src={FaqsImage}
          alt="healing hub homoeopathic clinic"
          width={600}
          height={600}
          className=" object-cover w-full rounded-lg"
        />
      </div>

      {/* right  */}
      <div className="flex flex-1 flex-col gap-5">
        <p className="">
          Tired of recurring health issues and unsure what to do next? These
          answers will help you understand how natural homeopathy can finally
          give you lasting relief and peace of mind.
        </p>

        <div className="w-full flex flex-col gap-5">
          {faqs?.map((item, index) => (
            <Faq key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
