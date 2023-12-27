"use client";
import React, { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { tw } from "twind";
import { css } from "twind/css";
import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";
import { getServices } from "@/apis/service.api";
import { CircularProgress } from "@mui/material";
import HTMLParser from "../shared/HTMLParser";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getServices();
        console.log(data);
        setServiceData(data.data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-paper pb-12 pt-16 w-full min-h-[900px]">
      <Wrapper className="relative w-full h-full flex items-center justify-center">
        <VerticleEl className="sm:left-12 left-0 !text-[#231F20]">
          SERVICES
        </VerticleEl>
        <div className="w-full pt-6">
          {loading ? (
            <CircularProgress
              className="text-yellow-550 absolute top-[100%] left-[48%] -translateX-1/2 -translateY-1/2"
              sx={{ width: "100px" }}
              size={60}
            />
          ) : (
            <>
              <Swiper
                autoHeight={true}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                navigation
                autoplay={{
                  delay: 2000,
                }}
                spaceBetween="10"
                pagination={{ clickable: true, el: ".slider-pagination" }}
                className={tw(
                  css({
                    "& .swiper-scrollbar": {
                      "@apply": "hidden",
                    },
                  })
                )}
                loop
              >
                {serviceData &&
                  serviceData.map((service, i) => (
                    <SwiperSlide
                      key={service.id}
                      className="w-full flex items-center justify-center"
                    >
                      <div className="relative sm:w-[690px] sm:h-[700px] w-full h-[550px] sm:p-0 p-4">
                        <img
                          className="w-full h-full object-cover"
                          src={service.bg_image}
                          alt="img"
                        />
                        <div className="absolute flex flex-col text-black top-0 left-0 w-full h-full sm:py-12 sm:pl-16 sm:pr-6 p-8">
                          <span className="font-bold text-lg sm:text-[40px] text-left flex items-end justify-end">
                            {i + 1 > 10 ? ++i : `0${++i}`}
                          </span>
                          <div className="flex flex-col gap-6">
                            <h1 className="text-3xl sm:text-[70px] font-bold text-[#231F20] sm:leading-[80px]">
                              {service.name}
                            </h1>
                            <p className="text-base sm:text-[26px] font-light mt-4">
                              <HTMLParser content={service.about} />
                            </p>
                            <p className="text-base sm:text-[26px] font-medium">
                              <HTMLParser content={service.description} />
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
            </>
          )}
        </div>

        <VerticleEl className="sm:-right-[0px] -right-4 !text-[#231F20]">
          STUPID SERVICES
        </VerticleEl>
      </Wrapper>
    </div>
  );
};

export default Services;
