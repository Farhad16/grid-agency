import Achieve from "@/components/about/Achieve";
import Mesh from "@/components/about/Mesh";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import DividerElement from "@/components/shared/DividerElement";
import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import { Divider } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen">
      <div className="flex flex-col relative">
        <Wrapper className="relative">
          <p className="text-[46px] md:text-[120px] lg:text-[150px] text-light-50 tracking-[10.5px] tracking-[-2.324px] leading-[68.983%] font-extrabold">
            Our
          </p>
          <img
            layout="responsive"
            alt="stupid"
            src="/assets/about/stupid.png"
            className="md:w-[384px] w-[119px] md:h-[129px] absolute md:-bottom-28 md:left-[170px] left-[60px] -bottom-10"
          />
        </Wrapper>

        <Vision />
        <Mission />
        <Mesh />

        <div className="lg:text-[54px] md:text-[40px] text-[24px] text-light-50 font-medium sm:tracking-[-2.7px] flex items-center flex-col lg:pt-16 md:pt-12 pt-8">
          <p>We believe that within</p>
          <div className="flex items-center">
            <span>these seemingly </span>
            <img
              layout="responsive"
              alt="stupid"
              src="/assets/about/stupid.png"
              className="lg:w-[200px] md:w-[160px] w-[100px]"
            />
            <p> ideas,</p>
          </div>
        </div>
      </div>
      <Achieve />
      <Footer />
    </div>
  );
};

export default Page;
