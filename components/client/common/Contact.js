"use client";

import { createElement, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

const Contact = () => {
  const {
    social: socialLinks,
    contact,
    addressInOneline,
    googleMap,
    hours,
  } = siteConfig;

  const social = [
    { icon: AiFillInstagram, url: socialLinks.instagram },
    { icon: FaFacebookF, url: socialLinks.facebook },
    { icon: FaYoutube, url: socialLinks.youtube },
    { icon: IoLogoWhatsapp, url: socialLinks.whatsapp },
  ];

  const [phone, setPhone] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone) return alert("Enter valid phone number");

    const whatsappUrl = `https://wa.me/${phone.replace(
      "+",
      "",
    )}?text=Hello, my name is ${name}. I want consultation. ${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="h-full w-full grid grid-cols-1 xl:grid-cols-2 gap-5 padding py-20">
      {/* left  */}
      <div className="h-full w-full flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap1">
            <h3 className="font-medium text-lg">Contact Us</h3>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Book Your Consultation Today
            </h2>
          </div>

          <p className="">
            Struggling with recurring health problems? Get natural, safe, and
            long-term relief with personalized homeopathy treatment in Govandi,
            Mumbai.
          </p>
        </div>

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
        <div className="flex items-center gap-3 text-(--text-white) text-2xl">
          {social.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-(--primary-forest) rounded-full hover:scale-110 transition"
            >
              {createElement(item.icon)}
            </a>
          ))}
        </div>
      </div>

      {/* right  */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 bg-(--bg-light) p-6 rounded-lg shadow-md"
      >
        <h3 className="text-3xl font-semibold">Fill the form below!</h3>

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg "
          required
        />

        {/* Phone Input with All Country Codes */}
        <PhoneInput
          international
          defaultCountry="IN"
          value={phone}
          onChange={setPhone}
          className="border p-3 rounded-lgw-full"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg "
          required
        />

        {/* Message */}
        <textarea
          placeholder="Your Problem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-3 rounded-lg"
        />

        {/* Button */}
        <button
          type="submit"
          className="btn bg-(--primary-forest) text-(--text-white)"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
