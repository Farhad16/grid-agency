"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/navigation";
import "@/components/intro/button.css";

function ReusableImageAnimation({ imageSrc, imageAlt, scale, main }) {
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
      transition: "opacity 0.5s",
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
          {scale === 0.5 && (
            <div className="flex justify-center">
              <div className="content" onClick={handleMainPageClick}>
                <svg id="more-arrows">
                  <polygon
                    className="arrow-top"
                    points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "
                  />
                  <polygon
                    className="arrow-middle"
                    points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "
                  />
                  <polygon
                    className="arrow-bottom"
                    points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ReusableImageAnimation;
