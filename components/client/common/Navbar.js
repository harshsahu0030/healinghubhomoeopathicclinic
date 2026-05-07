"use client";

import Link from "next/link";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLocationDot, FaYoutube } from "react-icons/fa6";
import { IoIosMail, IoLogoWhatsapp } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { createElement } from "react";
import Image from "next/image";
import Logo from "@/public/logo-trans-hor.webp";
import { siteConfig } from "@/data/siteConfig";
import HomeV from "@/public/homeVideo.mp4";

const Navbar = ({ onClose, navRef }) => {
  const {
    social: socialLinks,
    contact,
    addressInOneline,
    googleMap,
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
    <nav
      ref={navRef}
      className="fixed top-0 -right-full h-screen overflow-y-scroll w-full max-md:pb-20  bg-(--bg-dark) text-(--text-white)  flex flex-col gap-5  z-9999 "
    >
      <div className="h-20 w-full padding flex items-center justify-between py-4 xl:py-2 gap-5">
        <Link href="/" className="h-full w-fit max-w-[50%]">
          <Image
            src={Logo}
            alt="healinghub logo"
            height={800}
            width={800}
            className="h-full w-full object-contain"
          />
        </Link>

        <button
          className="flex items-center justify-center gap-2 btn text-(--text-white) border-2 py-1 px-6 rounded-full"
          onClick={onClose}
        >
          close
          <IoCloseSharp />
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 h-full w-full p-4">
        {/* left  */}
        <div className="hidden xl:flex items-end h-full w-full">
          <video
            className="h-[40vh] object-contain rounded-lg"
            autoPlay
            loop
            muted
            preload="true"
            height={500}
            width={500}
            playsInline
          >
            <source src={HomeV} type="video/mp4" />
            <track src={HomeV} />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* right  */}
        <div className="flex flex-col gap-5">
          <ul className="flex flex-col gap-2">
            {navLinks?.map((item, index) => (
              <li
                key={index}
                className="text-4xl uppercase font-bold"
                onClick={onClose}
              >
                <Link href={item?.url}>{item?.label}</Link>
              </li>
            ))}
          </ul>

          <hr className="border border-(--bg-mint)/40" />

          <div className="flex flex-col gap-2">
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
              <a href={`tel:${contact?.code}${contact?.phone}`}>
                {contact?.code}-{contact?.phone}
              </a>
            </p>

            <p className="flex items-center gap-2">
              <IoIosMail />

              <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 text-(--text-dark) text-2xl">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-(--bg-mint) rounded-full hover:scale-110 transition"
              >
                {createElement(item.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
