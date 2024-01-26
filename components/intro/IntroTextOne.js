"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function IntroTextOne() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    const pin = gsap.fromTo(
      section,
      {
        opacity: 1,
      },
      {
        opacity: 1,
        transition: "opacity 1s",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: trigger,
          start: "center center",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    // Add text growth animation
    const textGrow = gsap.to(section.querySelector(".overlay-zoom"), {
      scale: 20,
      opacity: 0,
      transition: "opacity 1s",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: ".overlay-zoom",
        start: "center center",
        end: "2000 top",
        scrub: 0.6,
      },
    });

    return () => {
      pin.kill();
      textGrow.kill();
    };
  }, []);

  return (
    <section>
      <div
        ref={triggerRef}
        className="flex items-center justify-center min-h-screen"
      >
        <div
          ref={sectionRef}
          className="scroll-section-inner flex items-center justify-center"
        >
          <div className="overlay-zoom uppercase font-extrabold flex flex-col text-light-50 items-center text-xl text-center relative">
            <span className="text-6xl">STUPID</span>
            <span className="uppercase font-extrabold text-[10px]">
              it's where remarkable ideas come to life
            </span>
            <img
              src="/assets/main_page/text/t1.png"
              alt="t1"
              className="w-24 absolute top-1 left-1/2 transform -translate-x-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroTextOne;
