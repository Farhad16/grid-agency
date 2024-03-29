"use client";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { useState } from "react";
import Wrapper from "../shared/Wrapper";
import GridHoverBottom from "./GridHoverBottom";
import GridHoverTop from "./GridHoverTop";

const GridAgency = () => {
  const [isTextHovered, setIsTextHovered] = useState(false);

  return (
    <div
      className="py-20 group sm:flex flex-col items-center bg-[#0A0808] hidden"
      onMouseEnter={() => setIsTextHovered(true)}
      onMouseLeave={() => setIsTextHovered(false)}
    >
      <Wrapper className="flex flex-col items-center sm:min-h-[800px]">
        <GridHoverTop isTextHovered={isTextHovered} />

        <div className="flex flex-col items-center text-light-50 mb-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-lg md:text-[26px] lg:text-[30px] font-medium sm:!leading-[40px] uppercase tracking-[4.5px] flex items-center sm:ml-16 ml-10">
            Follow Us
            <img
              src="/assets/contact/Sparkle.gif"
              alt="stupid"
              className="sm:w-[100px] sm:h-[100px] w-[60px] h-[60px]"
            />
          </div>
          <h1 className="lg:text-[110px] text-4xl md:text-[90px] font-extrabold relative">
            @gridagencyinc
            <img
              src="/assets/contact/lines.png"
              alt="lines"
              className="absolute w-[60%] sm:top-6 -bottom-4 left-[-4]"
            />
          </h1>
        </div>

        <GridHoverBottom isTextHovered={isTextHovered} />
      </Wrapper>
      <Wrapper className="flex items-center justify-end sm:mt-0 mt-10 text-light-50">
        <Link
          style={{ textDecoration: "none" }}
          href="https://www.instagram.com/gridagencyinc/"
          className="hover:!text-yellow-550 transition duration-300 ease-in-out !text-light-50"
        >
          <InstagramIcon sx={{ fontSize: "50px" }} />
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          href="https://www.linkedin.com/company/gridcommunications"
          className="hover:!text-yellow-550 transition duration-300 ease-in-out !text-light-50"
        >
          <LinkedInIcon sx={{ fontSize: "50px" }} />
        </Link>
      </Wrapper>
    </div>
  );
};

export default GridAgency;
