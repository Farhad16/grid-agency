import React, { useEffect, useRef, useState } from "react";
import HTMLParser from "../shared/HTMLParser";
import VerticleEl from "../shared/VerticleEl";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

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
      return "-130vw";
    } else if (screenWidth >= 1600 && screenWidth <= 1800) {
      return "-185vw";
    } else if (screenWidth > 1400 && screenWidth < 1600) {
      return "-210vw";
    } else if (screenWidth > 1300 && screenWidth <= 1400) {
      return "-250vw";
    } else if (screenWidth >= 900 && screenWidth <= 1300) {
      return "-280vw";
    } else if (screenWidth >= 700 && screenWidth < 900) {
      return "-310vw";
    } else if (screenWidth < 700) {
      return "-400vw";
    }
  }

  let topGap = 90;
  if (screenWidth > 1800) {
    topGap = 160;
  } else if (screenWidth < 700) {
    topGap = 300;
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
    <section className="scroll-section-outer relative">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex relative flex-row lg:pl-16">
          <div className="flex gap-32 md:gap-56 lg:gap-80 lg:px-32">
            <VerticleEl className="-left-10 top-[50%] !text-[#231F20] z-10">
              SERVICES
            </VerticleEl>
            {serviceData.map((service, i) => (
              <div
                key={service.id}
                className="relative w-[400px] h-[500px] md:h-[650px] lg:w-[710px] lg:h-[800px]"
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
                  <div className="flex flex-col sm:gap-6 lg:mt-10 mt-6 gap-3 text-[#231F20]">
                    <h1 className="text-[35px] md:text-[50px] lg:text-[70px] font-extrabold tracking-[-2.107px] sm:tracking-[-2.5px] lg:leading-[60px] leading-[38px]">
                      {service.name}
                    </h1>
                    <div className="text-base md:text-[18px] lg:text-[26px] mt-4 sm:tracking-[-1.3px] tracking-[-0.609px] sm:leading-normal leading-[20px]">
                      <HTMLParser content={service.about} />
                    </div>
                    <div className="text-base md:text-[18px] lg:text-[26px] sm:tracking-[-1.5px] tracking-[-0.702px] font-medium sm:leading-normal leading-[20px]">
                      <HTMLParser content={service.description} />
                    </div>
                  </div>
                </div>
                {i === serviceData.length && (
                  <p className="absolute -right-[40%] top-[40%] gap-4 -rotate-90 font-extralight text-xs sm:text-[21px] tracking-[6.93px] !text-[#231F20] z-10 flex flex-row">
                    <span>OUR </span> <span>CAPABILITIES</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSliderDesktop;
