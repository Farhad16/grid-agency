"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function IntroTextThree() {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;

    const pin = gsap.fromTo(
      section,
      {
        translateX: 0,
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
    const textGrow = gsap.to(section.querySelector(".overlay-three"), {
      scale: 20,
      opacity: 0,
      transition: "opacity 1s",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: ".overlay-three",
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
      <div ref={triggerRef} className="flex items-center justify-center">
        <div
          ref={sectionRef}
          className="scroll-section-inner flex items-center justify-center"
        >
          <div className="overlay-three uppercase font-extrabold flex flex-col text-light-50 items-center text-xl text-center relative">
            <img
              src="/assets/main_page/text/t3.png"
              alt="t1"
              className="w-36 -mb-4"
            />
            <span>In these uncharted</span>
            <span>waters of creativity</span>
            <span>we find our thrill</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroTextThree;