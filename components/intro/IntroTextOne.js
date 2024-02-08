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
        end: "10000 center",
        scrub: true,
        pin: true,
        duration: 2000,
      },
    });

    tl.to(".overlay-zoom", { scale: 30, duration: 10000 })
      .to(".overlay-zoom", { opacity: 0, duration: 1000 }, "<25%")
      .to(".overlay-two", { opacity: 1 }, "<35%")
      .to(".overlay-two", { scale: 30, duration: 10000 }, "<60%")
      .to(".overlay-two", { opacity: 0, duration: 1000 }, "<60%")
      .to(".overlay-three", { opacity: 1 }, "<70%")
      .to(".overlay-three", { opacity: 1, scale: 30, duration: 10000 }, "<100%")
      .to(".overlay-three", { opacity: 0, duration: 1000 }, "<95%")
      .to(".overlay-three", { display: "none" }, "<100%");
  }, []);

  return (
    <section className="content-scroll">
      <div className="flex flex-col items-center justify-center relative min-h-screen">
        <div className="flex items-center justify-center w-full h-full absolute top-0">
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

        <div className="flex items-center justify-center w-full h-full absolute top-0">
          <div className="opacity-0 scale-[.1] overlay-two uppercase font-extrabold flex flex-col text-light-50 items-center text-xl text-center relative">
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
          <div className="opacity-0 scale-[.1] overlay-three uppercase font-extrabold flex flex-col text-light-50 items-center text-xl text-center relative">
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
