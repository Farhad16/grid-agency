"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from "react";
import Loading from "./Loading";

gsap.registerPlugin(ScrollTrigger);
function IntroAndTextScroll({ hideIntro, step, handleButtonClick, setStep }) {
  const [loadingHeight, setLoadingHeight] = useState(0);

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
  }, [screenWidth]);

  useGSAP(() => {
    const races = document.getElementById("loading-section");
    if (races) {
      const height = races.offsetHeight;
      const inPx = `${height}px`;
      setLoadingHeight(inPx);
    }

    function getTranslation() {
      if (screenWidth > 640 && screenWidth < 1025) {
        return "12%";
      } else if (screenWidth > 1800) {
        return "42%";
      } else return "30%";
    }

    const t1 = gsap.timeline({
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

    t1.to(".loading-scroll", { y: "-100vh", opacity: 0, duration: 1000 }, "<5%")
      .to(".loading-scroll", { display: "none", duration: 1000 }, "<5%")
      .to(".text-content", { top: 0, marginTop: 0, duration: 1000 }, "<")

      .to(".parallax", { y: "-100%", duration: 1500 }, "<10%")

      .to(
        ".overflow-zoom",
        {
          y: getTranslation(),
          duration: 1000,
        },
        "<"
      )
      .to(
        ".overflow-zoom",
        {
          minWidth: "100%",
          width: "100%",
          duration: 2000,
        },
        "<"
      )

      .to(".overflow-zoom", { opacity: 0, duration: 1000 }, "<50%")

      .to(".overlay-two", { opacity: 1 }, "<55%")
      .to(
        ".overlay-two",
        { minWidth: "100%", width: "100%", duration: 8000 },
        "<60%"
      )
      .to(".overlay-two", { opacity: 0, duration: 1000 }, "<60%")

      .to(".overlay-three", { opacity: 1 }, "<70%")
      .to(
        ".overlay-three",
        { opacity: 1, minWidth: "110%", width: "110%", duration: 6000 },
        "<100%"
      )
      .to(".overlay-three", { opacity: 0, duration: 1000 }, "<99%")
      .to(".overlay-three", { display: "none" }, "<100%");
  }, []);

  return (
    <>
      {!hideIntro && (
        <div
          className={`${
            hideIntro ? "hidden" : "flex"
          } flex-col content-scroll relative w-full h-full`}
        >
          <div className="loading-scroll w-full h-full" id="loading-section">
            <Loading
              step={step}
              handleButtonClick={handleButtonClick}
              setStep={setStep}
              className="loading"
            />
          </div>

          <div
            className="w-full h-full sm:block hidden items-center justify-center absolute text-content mt-[-60px]"
            style={{ top: `${loadingHeight}` }}
          >
            <div className="flex flex-col items-center justify-center relative min-h-screen">
              <div className="flex items-center justify-center w-full h-full absolute top-0">
                <img
                  src="/assets/intro/para.png"
                  alt="Background Image"
                  className="object-cover min-h-[120vh] parallax"
                />
              </div>
              {/* Svg should change here */}
              <div className="flex items-center xl:items-start justify-center w-full h-full absolute top-0 stupid-text">
                <img
                  src="/assets/intro/stupid.svg"
                  alt="t1"
                  className="w-[1%] overflow-zoom xl:mt-[6%]"
                />
              </div>
              <div className="flex items-center justify-center w-full h-full absolute top-0">
                <img
                  src="/assets/intro/second.svg"
                  alt="t1"
                  className="opacity-0 w-[1%] overlay-two"
                />
              </div>
              <div className="flex items-center justify-center w-full h-full absolute top-0">
                <img
                  src="/assets/intro/third.svg"
                  alt="t1"
                  className="opacity-0 w-[1%] overlay-three"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IntroAndTextScroll;
