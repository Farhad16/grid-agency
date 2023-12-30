"use client";
import React, { useEffect, useState } from "react";
import { A11y, Autoplay, Pagination } from "swiper";
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
    <div className="bg-paper pb-12 pt-16 w-full relative">
      <Wrapper className="w-full h-full flex items-center justify-center min-h-[200px]">
        <VerticleEl className="sm:left-12 left-0 top-[350px] !text-[#231F20]">
          SERVICES
        </VerticleEl>
        <>
          {loading ? (
            <CircularProgress
              className="text-yellow-550 absolute top-[40%] sm:left-[48%] left-[42%] -translateX-1/2 -translateY-1/2"
              sx={{ width: "100px" }}
              size={60}
            />
          ) : (
            <div className="w-full h-full mt-10">
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
                {serviceData &&
                  serviceData.map((service, i) => (
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
                          <span className="font-bold text-lg sm:text-[40px] text-left flex items-end justify-end">
                            {i + 1 > 10 ? ++i : `0${++i}`}
                          </span>
                          <div className="flex flex-col sm:gap-6 sm:mt-10 mt-4 gap-3">
                            <h1 className="text-3xl md:text-[70px] lg:text-[80px] font-bold text-[#231F20] sm:leading-[80px]">
                              {service.name}
                            </h1>
                            <p className="text-base sm:text-[26px] font-light mt-4 leading-[30px] tracking-[-1.3px]">
                              <HTMLParser content={service.about} />
                            </p>
                            <p className="text-base sm:text-[26px] leading-[30px] tracking-[-1.3px]">
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
            </div>
          )}
        </>

        <VerticleEl className="sm:-right-[0px] -right-4 top-[350px] !text-[#231F20]">
          STUPID SERVICES
        </VerticleEl>
      </Wrapper>
    </div>
  );
};

export default Services;
