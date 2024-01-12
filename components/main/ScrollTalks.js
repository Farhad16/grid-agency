"use client";
import { talkData } from "@/constance/talks.data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import VerticleEl from "../shared/VerticleEl";
import { useRouter } from "next/navigation";

function ScrollTalks() {
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
    if (screenWidth > 2000) {
      return "-70vw";
    } else if (screenWidth >= 1600 && screenWidth <= 2000) {
      return "-110vw";
    } else if (screenWidth >= 1400 && screenWidth < 1600) {
      return "-140vw";
    } else if (screenWidth >= 1300 && screenWidth < 1400) {
      return "-160vw";
    } else if (screenWidth >= 1100 && screenWidth < 1300) {
      return "-170vw";
    } else if (screenWidth >= 900 && screenWidth < 1100) {
      return "-185vw";
    } else if (screenWidth >= 700 && screenWidth < 900) {
      return "-235vw";
    }
  }

  gsap.registerPlugin(ScrollTrigger);

  let topGap = 90;
  if (screenWidth > 1800) {
    topGap = 150;
  }

  useEffect(() => {
    const pin = gsap.fromTo(
      "#stupid-inner",
      {
        translateX: 0,
      },
      {
        translateX: `${getScreenWidth()}`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: "#stupid",
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

  const router = useRouter();
  const workRoute = () => {
    router.push("/portfolio");
  };

  return (
    <section className="scroll-section-outer sm:block hidden relative bg-talk">
      <div id="stupid">
        <div className="flex relative flex-row" id="stupid-inner">
          <div className="flex px-20">
            <VerticleEl className="-left-10 top-[50%] !text-[#E6E0D2] z-10 sm:block hidden">
              STUPID TALKS
            </VerticleEl>
            {talkData.map((talk, i) => (
              <div
                className={`flex flex-row lg:min-w-[900px] sm:min-w-[750px] min-w-[600px] z-10 pt-2 h-[100vh] ${
                  i % 2 === 0 ? "items-start" : "items-end"
                }`}
                key={i}
              >
                <div className="flex gap-6 items-start">
                  <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end text-yellow-550">
                    {talk.serial}
                  </span>
                  <div className="relative">
                    <img
                      className="lg:max-w-[600px] sm:max-w-[450px] sm:h-[280px] max-w-[400px] lg:h-[385px] h-[250px] rounded-xl"
                      src={talk.img}
                      alt="img"
                    />
                    <h1 className="font-extrabold absolute text-4xl lg:text-[70px] sm:text-[60px] text-light-50 top-[40%] sm:-right-[200px] -right-[100px] sm:leading-[70px] tracking-[-3.5px] hover:bg-yellow-600 transition duration-300 ease px-8">
                      {talk.about}
                    </h1>
                  </div>
                  <p className="lg:text-lg md:text-base text-sm font-normal tracking-widest ml-8 w-[140px]">
                    {talk.date}
                  </p>
                </div>
                {i === talkData.length - 1 && (
                  <p
                    onClick={workRoute}
                    className="mt-80 ml-10 cursor-pointer gap-4 -rotate-90 font-extralight text-xs sm:text-[21px] tracking-[6.93px] !text-yellow-550 z-10 flex flex-row"
                  >
                    <span>READ </span> <span>MORE</span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollTalks;
