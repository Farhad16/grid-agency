import ContentHeader from "@/components/content/ContentHeader";
import OurApproach from "@/components/content/OurApproach";
import OurWork from "@/components/content/OurWork";
import Footer from "@/components/shared/Footer";
import React from "react";

const ContentCreation = () => {
  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] font-manrope w-full h-full">
      <ContentHeader />
      <OurWork />
      <OurApproach />
      <div className="flex text-[40px] lg:text-[80px] xl:text-[100px] 2xl:text-[150px] text-light-50 sm:tracking-[-2.7px] tracking-[-0.837px] flex items-center text-center justify-center leading-normal font-bold py-[100px]">
        <span>Got a</span>
        <img
          layout="responsive"
          alt="stupid"
          src="/assets/about/stupid.png"
          className="w-[150px] md:w-[180px] lg:w-[280px] 2xl:w-[450px] rotate-[-8deg]"
        />
        <span>idea?</span>
      </div>
      <Footer />
    </div>
  );
};

export default ContentCreation;
