"use client";
import GlobalLoading from "@/components/intro/GlobalLoading";
import ImageFive from "@/components/intro/ImageFive";
import ImageFour from "@/components/intro/ImageFour";
import ImageOne from "@/components/intro/ImageOne";
import ImageSix from "@/components/intro/ImageSix";
import ImageThree from "@/components/intro/ImageThree";
import ImageTwo from "@/components/intro/ImageTwo";
import Loading from "@/components/intro/Loading";
import MobileLoading from "@/components/intro/MobileLoading";
import Banner from "@/components/main/Banner";
import MarqueeText from "@/components/main/MarqueeText";
import { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(0);

  const handleButtonClick = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col text-light-50 bg-[#241F20]">
      {step === 0 && <GlobalLoading setStep={setStep} />}
      {step > 0 && (
        <>
          <Loading step={step} handleButtonClick={handleButtonClick} />
          <MobileLoading step={step} handleButtonClick={handleButtonClick} />

          <div className="">
            <div
              className="sm:flex hidden flex-col items-center justify-center min-h-screen overflow-x-hidden"
              style={{
                backgroundImage: "url('/assets/intro/text-bg.png')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "130% auto",
                backgroundPosition: "top",
                marginTop: "-90px",
                zIndex: 9999999999,
              }}
            >
              <ImageOne />
              <ImageTwo />
              <ImageThree />
              <ImageFour />
              <ImageFive />
              <ImageSix />
            </div>
            <Banner />
            <MarqueeText />
            {/* <Services />
            <SelectedWork />
            <Pride />
            <StupidEnough />
            <Talks />
            <Footer /> */}
          </div>

          {/* <div className="w-full h-full sm:hidden block">
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
          </div>  */}
        </>
      )}
    </div>
  );
};

export default Page;
