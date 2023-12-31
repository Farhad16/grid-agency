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
      <Wrapper className="flex flex-col relative pb-20">
        <div className="relative">
          <p className="text-[100px] md:text-[120px] lg:text-[150px] text-light-50 tracking-[10.5px] font-bold">
            Our
          </p>
          <img
            layout="responsive"
            alt="stupid"
            src="/assets/about/stupid.png"
            className="sm:w-[384px] w-[200px] sm:h-[129px] absolute sm:-bottom-12 sm:left-[150px] left-[80px] -bottom-6"
          />
        </div>

        <Vision />
        <Mission />
        <Mesh />

        <div className="lg:text-[54px] md:text-[40px] text-[26px] text-light-50 font-medium tracking-[-2.7px] flex items-center flex-col lg:py-16 md:py-12 py-8">
          <p>We believe that within</p>
          <div className="flex items-center">
            <p>these seemingly</p>
            <img
              layout="responsive"
              alt="stupid"
              src="/assets/about/stupid.png"
              className="lg:w-[200px] md:w-[160px] w-[100px]"
            />
            <p> ideas,</p>
          </div>
        </div>
      </Wrapper>
      <Achieve />
      <Footer />
    </div>
  );
};

export default Page;
