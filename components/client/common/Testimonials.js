"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import Google from "@/public/google.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { siteConfig } from "@/data/siteConfig";

const Testimonials = ({ testimonials = [] }) => {
  return (
    <section
      aria-label="testimonials"
      className="w-full h-full grid xl:grid-cols-12 gap-10 text-(--text-dark) py-20 padding "
    >
      {/* left  */}
      <div className="h-full w-full xl:col-span-4 flex justify-center items-center">
        <div className="h-fit w-full bg-(--bg-light) p-4 rounded-lg flex flex-col gap-2">
          <h2 className="text-xl font-medium">{siteConfig?.name}</h2>
          <div className="flex items-center gap-2">
            <span className="font-medium">4.9</span>

            <div className="flex items-center">
              {new Array(5).fill("").map((_, index) => (
                <FaStar key={index} className="text-(--accent-clay)" />
              ))}
            </div>

            <span className="">(Google Reviews)</span>
          </div>

          <p>
            <span className="font-bold">Address: </span>
            {siteConfig?.addressInOneline}
          </p>

          <p>
            <span className="font-bold">Hours: </span>
            {siteConfig?.hours}
          </p>
          <p>
            <span className="font-bold">Contact: </span>
            {siteConfig?.contact?.code}-{siteConfig?.contact?.phone}
          </p>

          <hr className="border border-(--bg-dark)/40" />

          <a
            href={siteConfig?.googleMap}
            target="_blank"
            className="btn text-(--text-white) bg-(--primary-forest) w-full text-center"
          >
            Give us Review
          </a>
        </div>
      </div>

      {/* right  */}
      <div className="xl:col-span-8 flex flex-col gap-4">
        <div className="p-4 flex flex-wrap items-center gap-5 xl:gap-20 bg-(--bg-light) rounded-lg w-fit">
          <div className="flex items-center gap-2 text-2xl">
            <span className="font-medium">4.9</span>
            {new Array(5).fill("").map((_, index) => (
              <FaStar key={index} className="text-(--accent-clay)" />
            ))}
            <span className="">(Reviews)</span>
          </div>
          <Image
            src={Google}
            alt="Hero"
            height={100}
            width={100}
            className=""
          />
        </div>
        <div className="w-full h-full">
          <Swiper
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper h-80 w-[80vw] xl:w-full"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{ delay: 2000 }}
          >
            {testimonials?.map((item, index) => (
              <SwiperSlide
                key={item?.id}
                className="h-full w-full rounded-lg p-6 bg-(--bg-light) shadow-md border border-(--bg-dark)/10"
              >
                <h6 className="text-lg font-semibold">
                  {item?.testimonialAddons?.clientName}
                </h6>
                <div className="flex items-center gap-1 mt-1">
                  {new Array(item?.testimonialAddons?.rating?.["rating"] || 5)
                    .fill("")
                    .map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-(--accent-clay) text-sm"
                      />
                    ))}
                </div>
                <div
                  className="mt-4 overflow-y-scroll"
                  dangerouslySetInnerHTML={{
                    __html:
                      item?.content?.length > 200
                        ? item?.content.slice(0, 197) + "..."
                        : item?.content || "",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex self-end p-4 bg-(--bg-light) rounded-lg w-fit font-medium">
          Real stories of trust, care, and long-term healing from our patients
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
