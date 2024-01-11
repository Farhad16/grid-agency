"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { talkData } from "@/constance/talks.data";
import Link from "next/link";

function ScrollTalks() {
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
  }, []);

  function getScreenWidth() {
    if (screenWidth >= 1600 && screenWidth <= 2000) {
      return "-55vw";
    } else if (screenWidth >= 1400 && screenWidth < 1600) {
      return "-105vw";
    } else if (screenWidth >= 1300 && screenWidth < 1400) {
      return "-140vw";
    } else if (screenWidth >= 1100 && screenWidth < 1300) {
      return "-155vw";
    } else if (screenWidth >= 900 && screenWidth < 1100) {
      return "-180vw";
    } else if (screenWidth >= 700 && screenWidth < 900) {
      return "-230vw";
    }
  }

  gsap.registerPlugin(ScrollTrigger);

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
          start: "top top+=80",
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
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="flex relative flex-row background-text pl-24"
        >
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
                <p className="lg:text-lg md:text-base text-sm font-normal tracking-widest ml-8">
                  {talk.date}
                </p>
              </div>
            </div>
          ))}

          <Link href="/works" className="">
            <p className="-rotate-90 absolute bottom-[40%] text-center text-extralight !text-yellow-550 z-10 tracking-[3.96px] text-[21px]">
              READ
            </p>
            <p className="-rotate-90 absolute bottom-[53%] text-center text-extralight !text-yellow-550 z-10 tracking-[3.96px] text-[21px] -ml-[2.8px]">
              MORE
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ScrollTalks;
