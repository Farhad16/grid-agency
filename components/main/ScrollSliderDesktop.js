import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import HTMLParser from "../shared/HTMLParser";
import VerticleEl from "../shared/VerticleEl";
import MarqueeText from "./MarqueeText";

gsap.registerPlugin(ScrollTrigger);

const ScrollSliderDesktop = ({ serviceData }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isDesktop = useMediaQuery({ minWidth: 641, maxWidth: 1025 });
  const isLargeScreen = useMediaQuery({ minWidth: 1640 });

  useEffect(() => {
    const races = sectionRef.current;

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    let top = 90;
    if (isDesktop) {
      top = 150;
    }
    // if (isMobile) {
    //   top = 150;
    // } else if (isLargeScreen) {
    //   top = 200;
    // } else if (isDesktop) {
    //   top = 80;
    // }

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `${getScrollAmount()}px`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top top+=${top}`,
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden relative pt-[50px]">
      <div ref={triggerRef}>
        <MarqueeText />
        <div ref={sectionRef} className="flex relative flex-row">
          <div className="flex bg-paper-inner pl-[40px] sm:pl-[30px] md:pl-[60px] lg:pl-[150px] pr-[50px]lg:pt-[50px] 2xl:pt-[100px] items-center justify-center">
            <div className="flex gap-20 sm:gap-32 md:gap-56 lg:gap-70 xl:gap-80 2xl:gap-96 3xl:gap-[560px] 4xl:gap-[620px] sm:px-[100px] md:px-[120px] lg:px-[80px] xl:px-[150px] mx-[60px] xl:mx-[100px] 2xl:mx-[220px] 3xl:mx-[240px] 4xl:mx-[360px] 5xl:mx-[450px] py-10">
              <VerticleEl className="left-[3%] top-[30%] !text-[#231F20] z-10 uppercase">
                OUR capabilities
              </VerticleEl>
              {serviceData.map((service, i) => (
                <div
                  key={service.id}
                  className="relative w-[350px] h-[500px] sm:w-[450px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[710px] lg:h-[800px] 5xl:w-[850px] 5xl:h-[900px] mb-[50px]"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${service.bg_image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="flex flex-col text-black w-full h-full lg:py-16 lg:pl-14 lg:pr-12 px-10 py-6 relative">
                    <span className="font-extrabold text-lg sm:text-[40px] 5xl:text-[60px] text-left flex items-end justify-end">
                      {i + 1 > 10 ? ++i : `0${++i}`}
                    </span>
                    <div className="flex flex-col sm:gap-6 mt-2 lg:mt-10 gap-3 text-[#231F20]">
                      <h1 className="text-[30px] sm:text-[35px] md:text-[50px] lg:text-[70px] 5xl:text-[85px] font-extrabold tracking-[-2.107px] leading-[38px] sm:tracking-[-2.5px] lg:leading-[60px] 4xl:leading-[70px]">
                        {service.name}
                      </h1>
                      <div className="text-sm sm:text-base md:text-[18px] lg:text-[26px] 5xl:text-[32px] mt-2 md:mt-4 sm:tracking-[-1.3px] tracking-[-0.609px] sm:leading-normal leading-[20px]">
                        <HTMLParser content={service.about} />
                      </div>
                      <div className="text-sm sm:text-base md:text-[18px] lg:text-[26px] 5xl:text-[32px] sm:tracking-[-1.5px] tracking-[-0.702px] font-medium sm:leading-normal leading-[20px]">
                        <HTMLParser content={service.description} />
                      </div>
                    </div>
                  </div>
                  {i === serviceData.length && (
                    <VerticleEl className="-right-[35%] top-[40%] !text-[#231F20] z-10 uppercase">
                      OUR capabilities
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
