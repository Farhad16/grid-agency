"use client";
import GlobalLoading from "@/components/intro/GlobalLoading";
import ImageAnimationMobile from "@/components/intro/ImageAnimationMobile";
import IntroTextOne from "@/components/intro/IntroTextOne";
import IntroTextThree from "@/components/intro/IntroTextThree";
import IntroTextTwo from "@/components/intro/IntroTextTwo";
import Loading from "@/components/intro/Loading";
import MobileLoading from "@/components/intro/MobileLoading";
import Navbar from "@/components/shared/Navbar";
import { motion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const LazyBanner = lazy(() => import("@/components/main/Banner"));
const LazyMarqueeText = lazy(() => import("@/components/main/MarqueeText"));
const LazyServices = lazy(() => import("@/components/main/Services"));
const LazySelectedWork = lazy(() => import("@/components/main/SelectedWork"));
const LazyStupidEnough = lazy(() => import("@/components/main/StupidEnough"));
const LazyBlogSection = lazy(() => import("@/components/main/BlogSection"));
const LazyFooter = lazy(() => import("@/components/shared/Footer"));

const Page = () => {
  const [step, setStep] = useState(0);
  const [hideScrollButton, setHideScrollButton] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

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
    <div className="flex flex-col text-light-50 bg-[#0A0808] font-manrope">
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

          <div className="lg:mt-0 mt-[12%]">
            {!hideIntro && (
              <div className={`flex-col ${hideIntro ? "hidden" : "flex"}`}>
                {isMobile ? (
                  <MobileLoading
                    step={step}
                    handleButtonClick={handleButtonClick}
                    setStep={setStep}
                  />
                ) : (
                  <Loading
                    step={step}
                    handleButtonClick={handleButtonClick}
                    setStep={setStep}
                  />
                )}

                <div className="w-full h-full sm:hidden block">
                  <div className="flex flex-col scroll-section-outer items-center justify-center mt-[-80px]">
                    <ImageAnimationMobile
                      step={step}
                      handleButtonClick={handleButtonClick}
                      hideScrollButton={hideScrollButton}
                    />
                  </div>
                </div>
                <div className="w-full h-full sm:block hidden overflow-hidden items-center justify-center scroll-section-outer">
                  <IntroTextOne />
                  <IntroTextTwo />
                  <IntroTextThree />
                </div>
              </div>
            )}

            <div className="flex flex-col text-light-50 bg-[#0A0808] sm:pt-[250px] min-h-screen relative overflow-hidden !font-manrope">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyBanner setHideScrollButton={setHideScrollButton} />
                <LazyMarqueeText />
                <LazyServices />
                <LazySelectedWork />
                <LazyStupidEnough />
                <LazyBlogSection />
                {/* <LazyServices /> */}

                <LazyFooter />
              </Suspense>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Page;
