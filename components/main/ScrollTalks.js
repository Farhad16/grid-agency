"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { talkData } from "@/constance/talks.data";

function ScrollTalks() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const dimention = {
      windowWidth: 220,
      windowMargin: 50,
    };

    if (width < 475) {
      dimention.windowWidth = width * 1.5;
      dimention.windowMargin = 150;
    } else if (width > 412 && width < 750) {
      dimention.windowWidth = 300;
      dimention.windowMargin = 100;
    } else {
      dimention.windowWidth = 220;
      dimention.windowMargin = 50;
    }

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${dimention.windowWidth}vw`,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top-=${dimention.windowMargin} top"`,
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
                <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end text-yellow-550">
                  {talk.serial}
                </span>
                <div className="relative">
                  <img
                    className="sm:max-w-[600px] max-w-[400px] sm:h-[385px] h-[250px] rounded-xl"
                    src={talk.img}
                    alt="img"
                  />
                  <h1 className="font-extrabold absolute text-4xl sm:text-[70px] text-light-50 top-[40%] sm:-right-[200px] -right-[100px] sm:leading-[70px] tracking-[-3.5px] hover:bg-yellow-600 transition duration-300 ease px-8">
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
