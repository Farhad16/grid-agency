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
    if (screenWidth >= 1600 && screenWidth <= 2000) {
      return "-85vw";
    } else if (screenWidth > 1400 && screenWidth < 1600) {
      return "-150vw";
    } else if (screenWidth > 1300 && screenWidth <= 1400) {
      return "-180vw";
    } else if (screenWidth >= 900 && screenWidth <= 1300) {
      return "-180vw";
    } else if (screenWidth >= 700 && screenWidth < 900) {
      return "-280vw";
    }
  }
  console.log(getScreenWidth());
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
          start: "top top",
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
    <section className="scroll-section-outer sm:block hidden relative">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex relative flex-row pl-24">
          <div className="flex gap-20">
            <VerticleEl className="-left-10 top-[50%] !text-[#231F20] z-10 sm:block hidden">
              SERVICES
            </VerticleEl>
            {serviceData.map((service, i) => (
              <div
                key={service.id}
                className="relative w-[450px] h-[600px] md:h-[650px] lg:w-[710px] lg:h-[800px]"
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
                    <h1 className="text-[35px] md:text-[50px] lg:text-[80px] font-extrabold tracking-[-2.107px] sm:tracking-[-2.5px] lg:leading-[60px] leading-[38px]">
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
