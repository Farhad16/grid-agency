"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ReusableImageAnimation({ imageSrc, imageAlt, scale }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

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
          end: "3000 top",
          scrub: 1,
          pin: true,
        },
      }
    );

    // Add text growth animation
    const textGrow = gsap.to(section.querySelector("img"), {
      scale: scale,
      opacity: 1,
      transition: "opacity 1s",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: trigger,
        start: "center center",
        end: "3500 top",
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
          <div className="scroll-section flex items-center justify-center">
            <img
              src={`/assets/intro/${imageSrc}`}
              alt={imageAlt}
              id="img1"
              className="scale-[0.01]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReusableImageAnimation;
