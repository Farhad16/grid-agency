"use client";
import React from "react";
import Wrapper from "./Wrapper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const Footer = () => {
  return (
    <div
      className="min-h-[800px] sm:mt-[200px] py-16"
      style={{
        backgroundImage: "url('/assets/main_page/footer-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Wrapper className="w-full flex flex-col mt-[150px]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <img
            src="/assets/main_page/footer.gif"
            layout="responsive"
            className="w-[308px]"
            alt="footergif"
          />
          <div className="flex flex-col sm:gap-12">
            <div>
              <p className="bg-[#F9BC32] rotate-[2deg] inline-block text-sm sm:text-[29px] text-[#231F20] px-4 sm:py-2 mb-2 font-extrabold">
                new business
              </p>
              <p className="text-[#E6E0D2] md:text-[70px] lg:text-[100px] text-4xl font-extrabold ">
                have a stupid
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8">
              <p className="text-[#E6E0D2] md:text-[70px] lg:text-[100px] text-4xl font-extrabold">
                idea?
              </p>
              <button className="focus:outline-none outline-none group flex items-center border border-2 rounded-full border-[#F9BC32] transition duration-300 sm:w-[380px] w-full h-[50px]">
                <p className="w-full flex items-center group-hover:justify-center font-light">
                  <span className="mr-4 uppercase opacity-0 group-hover:opacity-100 transition-opacity transition-transform transform -translate-x-full group-hover:translate-x-0">
                    Contact Us
                  </span>
                  <ArrowForwardIcon
                    sx={{
                      fontSize: "30px",
                    }}
                    className="-ml-10 group-hover:ml-0 transition-transform transform -translate-x-full group-hover:translate-x-0"
                  />
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:mt-[200px] mt-[100px] text-xs sm:text-[15px] gap-4">
          <div className="uppercase flex flex-col text-[#E6E0D2]">
            <p>DO YOU LIKE STUPID IDEAS?</p>
            <p>jointheteam@gridagenyinc.ca</p>
          </div>
          <div className="uppercase flex flex-col text-[#E6E0D2]">
            <p>242 Applewood Cres</p>
            <p>Concord, ON L4K 4E5</p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="uppercase flex flex-col text-[#E6E0D2] sm:items-end">
              <p className="text-left">info@gridagenyinc.ca</p>
              <p className="text-left">(416) 557-4773</p>
            </div>
            <div className="flex items-center gap-2">
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between pt-10 border-t border-1 border-[#E6E0D2] border-dotted mt-[80px]">
          <p className="text-[#E6E0D2] font-light text-[10px]">
            © 2023, Grid Creative Advertising Inc.
          </p>
          <p className="text-[#E6E0D2] font-light text-[10px]">
            privacy and cookie policy
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
