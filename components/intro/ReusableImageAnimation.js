"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/navigation";
import "@/components/intro/button.css";

function ReusableImageAnimation({ imageSrc, imageAlt, scale }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const router = useRouter();

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
        transition: "opacity 0.5s",
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
      opacity: 0,
      transition: "opacity 0.7s",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: trigger,
        start: "center center",
        end: "3500 center",
        scrub: 0.6,
      },
    });

    return () => {
      pin.kill();
      textGrow.kill();
    };
  }, []);

  const handleMainPageClick = (e) => {
    router.push("/home", { scroll: true });
  };

  return (
    <section>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
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
