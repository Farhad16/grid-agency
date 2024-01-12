"use client";
import GlobalLoading from "@/components/intro/GlobalLoading";
import ImageAnimationMobile from "@/components/intro/ImageAnimationMobile";
import Loading from "@/components/intro/Loading";
import MobileLoading from "@/components/intro/MobileLoading";
import ReusableImageAnimation from "@/components/intro/ReusableImageAnimation";
import Pride from "@/components/main/Pride";
import SelectedWork from "@/components/main/SelectedWork";
import Services from "@/components/main/Services";
import StupidEnough from "@/components/main/StupidEnough";
import Talks from "@/components/main/Talks";
import Banner from "@/components/main/Banner";
import MarqueeText from "@/components/main/MarqueeText";
import Footer from "@/components/shared/Footer";
import { textSlider } from "@/constance/text.data";
import { useEffect, useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { motion } from "framer-motion";

const Page = () => {
  const [step, setStep] = useState(0);

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

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] font-manrope">
      {step === 0 && (
        <div className="fade-container">
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
          <Loading step={step} handleButtonClick={handleButtonClick} />
          <MobileLoading step={step} handleButtonClick={handleButtonClick} />
          <div className="w-full h-full sm:hidden block">
            <div className="flex flex-col scroll-section-outer items-center justify-center mt-[-80px]">
              <ImageAnimationMobile
                step={step}
                handleButtonClick={handleButtonClick}
              />
            </div>
          </div>
          <div className="w-full h-full sm:block hidden overflow-hidden items-center justify-center">
            {textSlider.map((item, index) => (
              <ReusableImageAnimation
                key={index}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                scale={item.scale}
              />
            ))}
          </div>
          <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[250px] min-h-screen relative">
            <Banner />
            <MarqueeText />
            <Services />
            <SelectedWork />
            <Pride />
            <StupidEnough />
            <Talks />
            <Footer />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Page;
