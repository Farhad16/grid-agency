"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { talkData } from "@/constance/talks.data";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

function ScrollTalks() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const windowSize = useWindowSize();
  const { width } = windowSize;

  let deviceWidth = 0;
  if (width < 412) {
    deviceWidth = width * 2;
  } else if (width < 750) {
    deviceWidth = 300;
  } else deviceWidth = 220;

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${deviceWidth}vw`,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, [width]);

  return (
    <section className="talk-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="talk-section-inner">
          <div className="background-text"></div>
          {talkData.map((talk, i) => (
            <div
              className={`flex flex-row sm:min-w-[900px] min-w-[700px] z-10 pt-2 ${
                i % 2 === 0 ? "items-start" : "items-end"
              }`}
              key={i}
            >
              <div className="flex gap-6 items-start">
                <span className="font-bold text-lg sm:text-[40px] text-left flex items-end justify-end text-yellow-550">
                  {talk.serial}
                </span>
                <div className="relative">
                  <img
                    className="sm:max-w-[600px] max-w-[400px] sm:h-[385px] h-[250px] rounded-xl"
                    src={talk.img}
                    alt="img"
                  />
                  <h1 className="font-bold absolute text-4xl sm:text-[70px] text-light-50 top-[40%] sm:-right-[200px] -right-[100px] sm:leading-[70px] tracking-[-3.5px] hover:bg-yellow-600 transition duration-300 ease px-8">
                    {talk.about}
                  </h1>
                </div>
                <p className="sm:text-lg text-sm font-normal tracking-widest ml-8">
                  {talk.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollTalks;
