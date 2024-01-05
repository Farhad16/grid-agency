"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { talkData } from "@/constance/talks.data";
import Link from "next/link";

function ScrollTalks() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-250vw`,
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top-=50 top"`,
          end: "2000 top",
          scrub: 1,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="talk-section-outer sm:block hidden ">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="talk-section-inner relative">
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
          <Link href="/works" className="ml-[250px]">
            <>
              <p className="-rotate-90 absolute bottom-[40%] text-center text-extralight !text-yellow-550 z-10 tracking-[3.96px] text-[21px]">
                READ
              </p>
            </>
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
