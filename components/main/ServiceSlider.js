"use client";
import React from "react";
import HTMLParser from "../shared/HTMLParser";
import { A11y, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { tw } from "twind";
import { css } from "twind/css";

const ServiceSlider = ({ serviceData }) => {
  return (
    <div className="w-full h-full mt-10 sm:hidden block">
      <Swiper
        autoHeight={true}
        modules={[Pagination, A11y, Autoplay]}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        spaceBetween="30"
        autoplay={{
          delay: 2000,
        }}
        loop
        pagination={{ clickable: true, el: ".slider-pagination" }}
        className={tw(
          css({
            "& .swiper-scrollbar": {
              "@apply": "hidden",
            },
          })
        )}
      >
        {serviceData.map((service, i) => (
          <SwiperSlide
            key={service.id}
            className="w-full flex items-center justify-center sm:p-0 p-4"
          >
            <div
              className="relative sm:w-[710px] sm:min-h-[750px] min-h-[450px] w-full h-full"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${service.bg_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col text-black w-full h-full sm:py-16 sm:pl-16 sm:pr-8 px-6 py-8">
                <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end">
                  {i + 1 > 10 ? ++i : `0${++i}`}
                </span>
                <div className="flex flex-col sm:gap-6 sm:mt-10 mt-4 gap-3 text-[#231F20]">
                  <h1 className="text-[42px] md:text-[70px] lg:text-[80px] font-extrabold tracking-[-2.107px] sm:tracking-[-4.5px] sm:leading-normal leading-[34px]">
                    {service.name}
                  </h1>
                  <div className="text-[12px] sm:text-[26px] mt-4 sm:tracking-[-1.3px] tracking-[-0.609px] sm:leading-normal leading-[20px]">
                    <HTMLParser content={service.about} />
                  </div>
                  <div className="text-sm sm:text-[26px] sm:tracking-[-1.5px] tracking-[-0.702px] font-medium sm:leading-normal leading-[20px]">
                    <HTMLParser content={service.description} />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className={tw(
          "slider-pagination text-center mt-4 space-x-2 flex flex-row items-center justify-center"
        )}
      />
    </div>
  );
};

export default ServiceSlider;
