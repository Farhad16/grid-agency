"use client";
import GlobalLoading from "@/components/intro/GlobalLoading";
import ImageAnimationMobile from "@/components/intro/ImageAnimationMobile";
import Loading from "@/components/intro/Loading";
import MobileLoading from "@/components/intro/MobileLoading";
import Banner from "@/components/main/Banner";
import MarqueeText from "@/components/main/MarqueeText";
import Pride from "@/components/main/Pride";
import SelectedWork from "@/components/main/SelectedWork";
import StupidEnough from "@/components/main/StupidEnough";
import Talks from "@/components/main/Talks";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(0);

  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col text-light-50 bg-[#241F20] font-manrope">
      <Navbar />
      {step === 0 && (
        <>
          <GlobalLoading setStep={setStep} />
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
        </>
      )}
      {step > 0 && (
        <>
          <Loading step={step} handleButtonClick={handleButtonClick} />
          <MobileLoading step={step} handleButtonClick={handleButtonClick} />

          <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[250px] min-h-screen relative">
            <Banner />
            <MarqueeText />
            {/* <Services /> */}
            <SelectedWork />
            <Pride />
            <StupidEnough />
            <Talks />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
