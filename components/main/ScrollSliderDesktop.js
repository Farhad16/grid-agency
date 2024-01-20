import React, { useEffect, useRef, useState } from "react";
import HTMLParser from "../shared/HTMLParser";
import VerticleEl from "../shared/VerticleEl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSliderDesktop = ({ serviceData }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]);

  function getScreenWidth() {
    if (screenWidth > 1800) {
      return "-190vw";
    } else if (screenWidth >= 1600 && screenWidth <= 1800) {
      return "-205vw";
    } else if (screenWidth > 1400 && screenWidth < 1600) {
      return "-220vw";
    } else if (screenWidth >= 900 && screenWidth <= 1400) {
      return "-230vw";
    } else if (screenWidth >= 700 && screenWidth < 900) {
      return "-240vw";
    } else if (screenWidth < 700 && screenWidth > 500) {
      return "-300vw";
    } else return "-340vw";
  }

  let topGap = 30;
  if (screenWidth < 700) {
    topGap = 50;
  }

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `${getScreenWidth()}`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top top+=${topGap}`,
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden relative">
      <div ref={triggerRef} id="service">
        <div
          ref={sectionRef}
          className="flex relative flex-row"
          id="serviceInner"
        >
          <div className="flex bg-paper-inner pl-[40px] sm:pl-[30px] md:pl-[60px] lg:pl-[150px] xl:pr-[300px] xl:pt-[100px] items-center justify-center">
            <div className="flex gap-20 sm:gap-32 md:gap-56 lg:gap-70 xl:gap-80 2xl:gap-96 3xl:gap-[560px] 4xl:gap-[620px] sm:pl-[100px] md:pl-[120px] lg:pl-[80px] xl:pl-[150px] xl:ml-[100px] 2xl:ml-[220px] 3xl:ml-[240px] 4xl:ml-[360px] mr-[300px] 4xl:mr-[500px] mt-16 sm:mt-10 md:mt-8 lg:mt-0">
              <VerticleEl className="-left-[2%] top-[30%] sm:-left-[3%] sm:top-[30%] md:left-[0%] lg:left-[5%] xl:left-[10%] !text-[#231F20] z-10">
                SERVICES
              </VerticleEl>
              {serviceData.map((service, i) => (
                <div
                  key={service.id}
                  className="relative w-[350px] h-[500px] sm:w-[450px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[710px] lg:h-[800px] mb-[50px]"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${service.bg_image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="flex flex-col text-black w-full h-full lg:py-16 lg:pl-14 lg:pr-12 px-10 py-6 relative">
                    <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end">
                      {i + 1 > 10 ? ++i : `0${++i}`}
                    </span>
                    <div className="flex flex-col sm:gap-6 mt-2 lg:mt-10 gap-3 text-[#231F20]">
                      <h1 className="text-[30px] sm:text-[35px] md:text-[50px] lg:text-[70px] font-extrabold tracking-[-2.107px] sm:tracking-[-2.5px] lg:leading-[60px] leading-[38px]">
                        {service.name}
                      </h1>
                      <div className="text-sm sm:text-base md:text-[18px] lg:text-[26px] mt-2 md:mt-4 sm:tracking-[-1.3px] tracking-[-0.609px] sm:leading-normal leading-[20px]">
                        <HTMLParser content={service.about} />
                      </div>
                      <div className="text-sm sm:text-base md:text-[18px] lg:text-[26px] sm:tracking-[-1.5px] tracking-[-0.702px] font-medium sm:leading-normal leading-[20px]">
                        <HTMLParser content={service.description} />
                      </div>
                    </div>
                  </div>
                  {i === serviceData.length && (
                    <VerticleEl className="-right-[40%] top-[40%] !text-[#231F20] z-10">
                      OUR CAPABILITIES
                    </VerticleEl>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSliderDesktop;
