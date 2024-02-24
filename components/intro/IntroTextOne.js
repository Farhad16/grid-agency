"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function IntroTextOne() {
  useGSAP(() => {
    const tl = gsap.timeline({
      ease: "none",
      duration: 5,
      scrollTrigger: {
        trigger: ".content-scroll",
        start: "top top",
        end: "12000 center",
        scrub: true,
        pin: true,
        duration: 1,
      },
    });

    const t2 = gsap.timeline({
      ease: "none",
      duration: 5,
      scrollTrigger: {
        trigger: ".parallax-scroll",
        start: "top top",
        end: "1000 center",
        scrub: true,
        pin: true,
        duration: 1,
      },
    });

    t2.to(".parallax", { y: -200, duration: 1000 }, "<20%");
    t2.to(".parallax", { opacity: 0, duration: 1000 }, "<20%");

    tl.to(".overlay-zoom", { minWidth: "900%", width: "900%", duration: 8000 })
      .to(".overlay-zoom", { opacity: 0, duration: 1000 }, "<50%")

      .to(".overlay-two", { opacity: 1 }, "<55%")
      .to(".overlay-two", { scale: 5, duration: 8000 }, "<60%")
      .to(".overlay-two", { opacity: 0, duration: 1000 }, "<60%")

      .to(".overlay-three", { opacity: 1 }, "<70%")
      .to(".overlay-three", { opacity: 1, scale: 5, duration: 8000 }, "<100%")
      .to(".overlay-three", { opacity: 0, duration: 1000 }, "<99%")
      .to(".overlay-three", { display: "none" }, "<100%");
  }, []);

  return (
    <section className="content-scroll">
      <div className="flex flex-col items-center justify-center relative min-h-screen overflow-hidden">
        <div className="flex items-center justify-center w-full h-full absolute top-0 parallax-scroll">
          <img
            src="/assets/intro/para.png"
            alt="Background Image"
            className="min-h-[150vh] parallax mt-[200px]"
          />
        </div>

        <div className="flex items-center justify-center w-full h-full absolute top-0">
          <img
            src="/assets/intro/courage.svg"
            alt="t1"
            className="w-[10%] min-w-[10%] overlay-zoom"
          />
        </div>

        <div className="flex items-center justify-center w-full h-full absolute top-0">
          <div className="opacity-0 scale-[.5] overlay-two uppercase font-extrabold flex flex-col text-light-50 items-center text-xl text-center relative">
            <span>ideas that seem impossible,</span>
            <span>until they're not</span>
            <img
              src="/assets/main_page/text/t2.png"
              alt="t1"
              className="w-24 -mt-2"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full absolute top-0">
          <div className="opacity-0 scale-[.5] overlay-three uppercase font-extrabold flex flex-col text-light-50 items-center text-xl text-center relative">
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

export default IntroTextOne;
