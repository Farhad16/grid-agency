"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { talkData } from "@/constance/talks.data";

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
      return "-50vw";
    } else if (screenWidth >= 1400 && screenWidth < 1600) {
      return "-100vw";
    } else if (screenWidth >= 1200 && screenWidth < 1400) {
      return "-150vw";
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
              className={`flex flex-row sm:min-w-[900px] min-w-[700px] z-10 pt-2 h-[80vh] sm:h-[100vh] ${
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

{
  /* <section
className="talk-section-outer sm:block hidden relative "
ref={sectionRef}
>
<div className="sticky top-0 h-screen flex items-center overflow-hidden">
  <div className="background-text"></div>

  <motion.div style={{ x }} className="flex">
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
  </motion.div>
</div>

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
</section> */
}
