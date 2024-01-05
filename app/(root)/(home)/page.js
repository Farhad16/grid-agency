"use client";
import Loading from "@/components/intro/Loading";
import MobileLoading from "@/components/intro/MobileLoading";
import ReusableImageAnimation from "@/components/intro/ReusableImageAnimation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TextLoader = () => {
  const text = [
    { imageSrc: "text1.png", imageAlt: "text1", scale: 2 },
    { imageSrc: "text2.png", imageAlt: "text2", scale: 2 },
    { imageSrc: "text3.png", imageAlt: "text3", scale: 2 },
    { imageSrc: "text4.png", imageAlt: "text4", scale: 2 },
    { imageSrc: "text5.png", imageAlt: "text5", scale: 2 },
    { imageSrc: "text6.png", imageAlt: "text6", scale: 0.5 },
  ];
  return (
    <>
      {text.map((t, i) => (
        <ReusableImageAnimation
          key={i}
          imageSrc={t.imageSrc}
          imageAlt={t.imageAlt}
          scale={t.scale}
        />
      ))}
    </>
  );
};

const Page = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStep((prevStep) => prevStep + 1);
      window.scrollTo(0, 0);
    }, 200);
    if (step === 0) {
      // Disable scrolling when case 0 is active
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
    return () => clearTimeout(timeout);
  }, []);

  const handleButtonClick = () => {
    if (step !== 0) {
      // Disable scrolling when case 0 is active
      document.body.style.overflow = "visible";
    }
    setStep((prevStep) => prevStep + 1);
  };

  const [showSkipSection, setShowSkipSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setShowSkipSection(true);
      } else {
        setShowSkipSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();
  const handleMainPageClick = (e) => {
    router.push("/home", { scroll: true });
    document.body.style.overflow = "visible";
  };

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808]">
      <Loading step={step} handleButtonClick={handleButtonClick} />
      <MobileLoading step={step} handleButtonClick={handleButtonClick} />
      <button
        onClick={handleMainPageClick}
        className="absolute top-4 right-4 z-10 border border-amber-400 hover:border-white text-light-50 hover:text-amber-400 px-4 py-2 rounded-full bg-transparent"
      >
        Skip Intro
      </button>

      <div
        className="flex flex-col scroll-section-outer items-center justify-center sm:mt-[-100px] mt-[-70px] bg-[#241F20]"
        style={{
          backgroundImage: "url('/assets/intro/text-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "130% auto",
          backgroundPosition: "top",
          zIndex: 9999999999,
        }}
      >
        <TextLoader />
        {step === 2 && (
          <div
            onClick={handleMainPageClick}
            className={`${
              showSkipSection ? "sm:!block" : "sm:!hidden block"
            } "cursor-pointer z-10 fixed sm:bottom-0 bottom-5 left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center`}
          >
            <img src="/assets/intro/skip.svg" alt="arrow" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
