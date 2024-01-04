"use client";
import React from "react";
import Wrapper from "./Wrapper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const [hovered, setHovered] = React.useState(false);

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
      <Wrapper className="w-full flex flex-col sm:mt-[80px] mt-24 xs:!px-12 px-8">
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
              <h1 className="text-light-50 sm:text-[80px] xl:text-[100px] text-[50px] font-extrabold leading-[87.424%] tracking-[-2.5px] sm:tracking-[-6px]">
                <span>have a</span> <span>stupid</span>
              </h1>
            </div>

            <div className="flex flex-row items-center sm:gap-8 gap-6 mt-2">
              <p className="text-light-50 sm:text-[80px] xl:text-[100px] text-[50px] font-extrabold leading-[87.424%] tracking-[-2.5px] sm:tracking-[-6px]">
                idea?
              </p>
              <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                // href="/contact"
                className="focus:outline-none outline-none border border-2 rounded-full border-yellow-550 md:w-[240px] lg:w-[300px] xl:w-[350px] w-full lg:h-[50px] lg:h-[45px] h-[40px] flex items-center justify-center text-center sm:text-sm text-xs tracking-[1.727px]"
              >
                <motion.p
                  className="sm:min-w-[150px] flex flex-row items-center justify-center text-center"
                  animate={{
                    x: hovered ? 100 : 0,
                    opacity: hovered ? 0 : 1,
                  }}
                >
                  <span className="uppercase text-light-50 text-center ">
                    say hello
                  </span>

                  <ArrowForwardIcon
                    sx={{
                      fontSize: "20px",
                      marginLeft: "10px",
                    }}
                    className="text-light-50"
                  />
                </motion.p>
                <motion.span
                  className={`${
                    hovered ? "sm:-ml-44 -ml-28" : "sm:-ml-36 -ml-32"
                  }  sm:min-w-[150px] min-w-[100px] uppercase text-light-50"`}
                  animate={{
                    x: hovered ? 0 : -100,
                    opacity: hovered ? 1 : 0,
                  }}
                >
                  Contact Us
                </motion.span>
              </div>
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
