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
        <Wrapper className="relative sm:!px-[100px] !px-10">
          <p className="text-[46px] md:text-[100px] lg:text-[120px] xl:text-[150px] text-light-50 sm:tracking-[10.5px] tracking-[-2.324px] leading-[68.983%] font-extrabold">
            Our
          </p>
          <img
            layout="responsive"
            alt="stupid"
            src="/assets/about/stupid.png"
            className="lg:w-[384px] md:w-[250px] w-[119px] md:h-[129px] absolute xl:top-[80%] xl:left-[12%] lg:top-[80%] lg:left-[20%] left-[20%] top-[80%] rotate-[-8.2deg]"
          />
        </Wrapper>

        <Vision />
        <Mission />
        <Mesh />

        <div className="lg:text-[54px] md:text-[40px] text-base text-light-50 font-medium sm:tracking-[-2.7px] tracking-[-0.837px] flex items-center flex-col lg:pt-16 md:pt-12 pt-0">
          <p>We believe that within</p>
          <div className="flex items-center">
            <span>these seemingly </span>
            <img
              layout="responsive"
              alt="stupid"
              src="/assets/about/stupid.png"
              className="lg:w-[200px] md:w-[160px] w-[100px] rotate-[-8deg]"
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
