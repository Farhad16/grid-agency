"use client";
import React from "react";
import Wrapper from "./Wrapper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="sm:min-h-[800px] sm:py-16 py-8"
      style={{
        backgroundImage: "url('/assets/footer/footer-bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Wrapper className="w-full flex flex-col sm:mt-[80px] mt-24">
        <div className="flex flex-col-reverse md:flex-row items-center lg:justify-between lg:gap-20 gap-12 py-10">
          <img
            src="/assets/footer/footer.gif"
            layout="responsive"
            className="lg:w-[308px] md:w-[250px] w-[175px]"
            alt="footergif"
          />
          <div className="flex flex-col w-full md:w-fit">
            <div className="flex flex-col">
              <p className="bg-yellow-550 rotate-[2deg] w-fit inline-block text-sm sm:text-[29px] text-[#231F20] px-4 sm:py-2 -mb-2 font-extrabold">
                new business
              </p>
              <h1 className="text-light-50 md:text-[60px] lg:text-[80px] xl:text-[100px] text-5xl font-extrabold lg:leading-[90px]">
                <span>have a</span> <span>stupid</span>
              </h1>
            </div>

            <div className="flex flex-row items-center sm:gap-8 gap-6 mt-2">
              <p className="text-light-50 md:text-[60px] lg:text-[80px] xl:text-[100px] text-5xl font-extrabold">
                idea?
              </p>
              <Link
                href="/contact"
                className="focus:outline-none outline-none group flex items-center border border-2 rounded-full border-yellow-550 transition duration-300 md:w-[240px] lg:w-[300px] xl:w-[350px] w-full lg:h-[50px] lg:h-[45px] h-[40px]"
              >
                <p className="w-full flex items-center group-hover:justify-center">
                  <span className="mr-4 uppercase opacity-0 group-hover:opacity-100 transition-opacity transition-transform transform -translate-x-full group-hover:translate-x-0 text-light-50">
                    Contact Us
                  </span>
                  <ArrowForwardIcon
                    sx={{
                      fontSize: "30px",
                    }}
                    className="-ml-10 group-hover:ml-0 transition-transform transform -translate-x-full group-hover:translate-x-0 text-light-50"
                  />
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:tracking-[3px] flex flex-row justify-between items-center sm:mt-[150px] mt-[50px] text-[10px] md:text-[15px] gap-4">
          <div className="uppercase sm:flex flex-col text-light-50 gap-1 hidden">
            <p>DO YOU LIKE STUPID IDEAS?</p>
            <p className="underline">jointheteam@gridagenyinc.ca</p>
          </div>
          <div className="uppercase flex flex-col text-light-50 gap-1">
            <p>242 Applewood Cres</p>
            <p>Concord, ON L4K 4E5</p>
          </div>
          <div className="items-center gap-2 text-light-50 sm:hidden">
            <InstagramIcon />
            <LinkedInIcon />
          </div>
          <div className="flex flex-row gap-4 justify-between sm:justify-start">
            <div className="uppercase flex flex-col text-light-50 sm:items-end gap-1">
              <p className="text-left underline">info@gridagenyinc.ca</p>
              <p className="text-left underline">(416) 557-4773</p>
            </div>
            <div className="sm:flex items-center gap-2 text-light-50 hidden">
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div className="uppercase w-full flex flex-col sm:flex-row justify-between sm:pt-10 pt-6 border-t border-1 border-light-50 border-dotted sm:mt-[80px] mt-[40px] gap-1">
          <p className="text-light-50 text-light-50 text-[10px] sm:text-left text-center">
            © 2023, Grid Creative Advertising Inc.
          </p>
          <p className="text-light-50 text-light-50 text-[10px] sm:text-left text-center">
            privacy and cookie policy
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
