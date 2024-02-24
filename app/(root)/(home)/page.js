"use client";
import GlobalLoading from "@/components/intro/GlobalLoading";
import ImageAnimationMobile from "@/components/intro/ImageAnimationMobile";
import IntroAndTextScroll from "@/components/intro/IntroAndTextScroll";
import MobileLoading from "@/components/intro/MobileLoading";
import Banner from "@/components/main/Banner";
import Blogs from "@/components/main/Blogs";
import SelectedWork from "@/components/main/SelectedWork";
import Services from "@/components/main/Services";
import Navbar from "@/components/shared/Navbar";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Page = () => {
  const [step, setStep] = useState(0);
  const [hideScrollButton, setHideScrollButton] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);
  const ref = useRef();

  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    const delay = 2000;

    const timeoutId = setTimeout(() => {
      setStep(1);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const clearLocalStorageOnUnload = () => {
      localStorage.clear();
    };

    window.addEventListener("beforeunload", clearLocalStorageOnUnload);

    // Cleanup the event listener when the app is unmounted
    return () => {
      window.removeEventListener("beforeunload", clearLocalStorageOnUnload);
    };
  }, []);

  useEffect(() => {
    const value = localStorage.getItem("firstLoad") || "";
    if (value) {
      setStep(1);
      setHideIntro(true);
    }
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] font-manrope w-full h-full">
      {step === 0 && (
        <div className={`"fade-container" ${hideIntro ? "hidden" : "block"}`}>
          <GlobalLoading />
        </div>
      )}

      {step > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, easing: "easeInOut", delay: 0.25 }}
        >
          <Navbar />

          <div className="mt-[5%] xl:mt-0 overflow-hidden">
            {!isMobile && (
              <IntroAndTextScroll
                hideIntro={hideIntro}
                step={step}
                handleButtonClick={handleButtonClick}
                setStep={setStep}
                hideScrollButton={hideScrollButton}
              />
            )}

            {!hideIntro && (
              <div className={`flex-col ${hideIntro ? "hidden" : "flex"}`}>
                {isMobile && (
                  <MobileLoading
                    step={step}
                    handleButtonClick={handleButtonClick}
                    setStep={setStep}
                  />
                )}

                <div className="w-full h-full sm:hidden block">
                  <div className="flex flex-col items-center justify-center mt-[-80px]">
                    <ImageAnimationMobile
                      step={step}
                      handleButtonClick={handleButtonClick}
                      hideScrollButton={hideScrollButton}
                    />
                  </div>
                </div>
              </div>
            )}

            <div
              className="flex flex-col text-light-50 bg-[#0A0808] sm:pt-[250px] min-h-screen relative overflow-hidden !font-manrope lg:mt-0"
              id="banner"
              ref={ref}
            >
              <Banner setHideScrollButton={setHideScrollButton} />
              <Services />
              <SelectedWork />
              <Blogs />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Page;
