import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { talkData } from "@/constance/talks.data";

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
        translateX: "-220vw",
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
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="background-text"></div>
          {talkData.map((talk, i) => (
            <div
              className={`flex flex-row min-w-[900px] z-10 pt-2 ${
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
                    className="sm:max-w-[600px] max-w-[500px] sm:h-[385px] h-[300px] rounded-xl"
                    src={talk.img}
                    alt="img"
                  />
                  <h1 className="font-bold absolute text-[70px] text-light-50 top-[40%] -right-[200px] leading-[70px] tracking-[-3.5px] hover:bg-yellow-600 transition duration-300 ease px-8">
                    {talk.about}
                  </h1>
                </div>
                <p className="text-lg font-normal tracking-widest ml-8">
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
