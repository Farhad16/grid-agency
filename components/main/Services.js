"use client";
import { serviceData } from "@/constance/service.data";
import React from "react";
import { A11y, Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { tw } from "twind";
import { css } from "twind/css";
import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";

const Services = () => {
  return (
    <div className="bg-paper pb-12 pt-16 w-full min-h-[900px]">
      <Wrapper className="relative w-full h-full flex items-center justify-center">
        <VerticleEl className="sm:left-12 left-0 !text-[#231F20]">
          SERVICES
        </VerticleEl>
        <div className="w-full">
          <Swiper
            autoHeight={true}
            modules={[Pagination, A11y]}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            spaceBetween="30"
            pagination={{ clickable: true, el: ".slider-pagination" }}
            className={tw(
              css({
                "& .swiper-scrollbar": {
                  "@apply": "hidden",
                },
              })
            )}
          >
            {serviceData.map((service) => (
              <SwiperSlide
                key={service.name}
                className="w-full flex items-center justify-center"
              >
                <div
                  className="relative sm:w-[690px] sm:h-[700px] w-full h-[550px] sm:p-0 p-4"
                  key={service.serial}
                >
                  <img
                    className="w-full h-full object-cover"
                    src={service.img}
                    alt="img"
                  />
                  <div className="absolute flex flex-col text-black top-0 left-0 w-full h-full sm:py-12 sm:pl-16 sm:pr-6 p-8">
                    <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end">
                      {service.serial}
                    </span>
                    <div className="flex flex-col gap-6">
                      <h1 className="text-3xl sm:text-[70px] font-bold text-[#231F20] sm:leading-[80px]">
                        {service.name}
                      </h1>
                      <p className="text-base sm:text-[26px] font-light mt-4">
                        {service.about}
                      </p>
                      <p className="text-base sm:text-[26px] font-medium">
                        {service.description}
                      </p>
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

        <VerticleEl className="sm:-right-[0px] -right-4 !text-[#231F20]">
          STUPID SERVICES
        </VerticleEl>
      </Wrapper>
    </div>
  );
};

export default Services;
