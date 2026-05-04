import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import { createElement } from "react";
import { FaClock } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

const Footer = ({ treatments = [] }) => {
  const {
    social: socialLinks,
    contact,
    addressInOneline,
    googleMap,
    name,
    doctor,
    hours,
    navLinks,
  } = siteConfig;

  const social = [
    { icon: AiFillInstagram, url: socialLinks.instagram },
    { icon: FaFacebookF, url: socialLinks.facebook },
    { icon: FaYoutube, url: socialLinks.youtube },
    { icon: IoLogoWhatsapp, url: socialLinks.whatsapp },
  ];

  return (
    <footer className="padding h-full w-full bg-(--bg-dark) text-(--text-white) flex flex-col gap-10 py-20 ">
      {/* Heading */}
      <div className="flex flex-col w-full">
        <span className="w-full flex justify-center uppercase text-[14vw] leading-[15vw] font-bold tracking-wide">
          Healinghub
        </span>

        <hr className="border border-(--bg-mint)/40" />

        <span className="w-full tracking-wide flex justify-center uppercase text-[4vw]">
          Multi-Speciality Homoeopathic Clinic
        </span>
        <span className="w-full tracking-wide flex justify-center  text-[2vw]">
          {doctor}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col xl:flex-row gap-5 w-full">
        {/* Left */}
        <div className="flex xl:flex-3 flex-col gap-5">
          <h3 className="text-xl font-medium">{name}</h3>

          <p className="xl:w-[70%]">
            Providing safe, natural, and personalized homeopathy treatment
            focused on the root cause for long-term healing.
          </p>

          {/* Contact */}
          <div className="flex flex-col gap-2 xl:w-[70%]">
            <p className="flex items-center gap-2">
              <FaLocationDot />
              <a href={googleMap} target="_blank">
                {addressInOneline}
              </a>
            </p>

            <p className="flex items-center gap-2">
              <FaClock />
              {hours}
            </p>

            <p className="flex items-center gap-2">
              <IoCall />
              <a href={`tel:${contact.code}${contact.phone}`}>
                {contact.code}-{contact.phone}
              </a>
            </p>

            <p className="flex items-center gap-2">
              <IoIosMail />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-(--text-dark) text-2xl">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                className="p-2 bg-(--bg-mint) rounded-full hover:scale-110 transition"
              >
                {createElement(item.icon)}
              </a>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="xl:flex-2 grid grid-cols-1 xl:grid-cols-2 gap-5">
          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-medium">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="hover:text[(--accent-clay)">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text[(--accent-clay)"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-medium">Treatments</h3>
            <ul className="flex flex-col gap-3">
              {treatments?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/our-treatments/${item?.slug}`}
                    className="hover:text[(--accent-clay)"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <hr className="border border-(--bg-mint)/40" />

      {/* Footer Bottom */}
      <div className="w-full text-center">
        © HealingHub 2026 | Designed & Developed by{" "}
        <a href="#" className="text-(--accent-clay) hover:underline">
          Shreeji Tech Solutions
        </a>{" "}
        | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
