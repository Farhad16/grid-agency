"use client";
import ImageAnimationMobile from "@/components/intro/ImageAnimationMobile";
import Loading from "@/components/intro/Loading";
import MobileLoading from "@/components/intro/MobileLoading";
import ReusableImageAnimation from "@/components/intro/ReusableImageAnimation";
import { textSlider } from "@/constance/text.data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TextSliderLargeScreen = () => {
  return (
    <>
      {textSlider.map((t, i) => (
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
    if (step < 2) {
      const timeout = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
        window.scrollTo(0, 0);
      }, 300);
      if (step === 0) {
        // Disable scrolling when case 0 is active
        document.body.style.overflow = "hidden";
        window.scrollTo(0, 0);
      }
      return () => clearTimeout(timeout);
    }
  }, [step]);

  const handleButtonClick = () => {
    if (step !== 0 && step !== 1) {
      // Disable scrolling when case 0 is active
      document.body.style.overflow = "visible";
    }
    setStep((prevStep) => prevStep + 1);
  };

  const router = useRouter();
  const handleMainPageClick = (e) => {
    router.push("/home", { scroll: true });
    document.body.style.overflow = "visible";
  };

  return (
    <div className="flex flex-col text-light-50 bg-[#241F20]">
      <Loading step={step} handleButtonClick={handleButtonClick} />
      <MobileLoading step={step} handleButtonClick={handleButtonClick} />
      {step !== 3 && (
        <button
          onClick={handleMainPageClick}
          className="absolute top-4 right-4 z-10 border border-amber-400 hover:border-white text-light-50 hover:text-amber-400 px-4 py-2 rounded-full bg-transparent"
        >
          Skip Intro
        </button>
      )}

      <div
        className="sm:flex hidden flex-col scroll-section-outer items-center justify-center"
        style={{
          backgroundImage: "url('/assets/intro/text-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "130% auto",
          backgroundPosition: "top",
          marginTop: "-100px",
          zIndex: 9999999999,
        }}
      >
        <TextSliderLargeScreen />
      </div>
      <div className="w-full h-full sm:hidden block">
        <div
          className="flex flex-col scroll-section-outer items-center justify-center mt-[-80px]"
          style={{
            backgroundImage: "url('/assets/intro/text-bg.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "130% auto",
            backgroundPosition: "top",
          }}
        >
          <ImageAnimationMobile
            step={step}
            handleButtonClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
