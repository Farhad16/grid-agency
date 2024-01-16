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
        <div className="flex flex-col-reverse md:flex-row items-center lg:gap-16 gap-12 py-10 lg:px-10 justify-center">
          <img
            src="/assets/footer/footer.gif"
            layout="responsive"
            className="lg:w-[308px] md:w-[250px] w-[175px]"
            alt="footergif"
          />
          <div className="flex flex-col w-fit">
            <div className="flex flex-col">
              <p className="bg-yellow-550 rotate-[2deg] w-fit inline-block text-sm sm:text-[29px] text-[#231F20] px-4 sm:py-2 -mb-2 font-extrabold tracking-[-0.648px] sm:tracking-[-1.5px]">
                new business
              </p>
              <h1 className="text-light-50 md:text-[80px] lg:text-[100px] xl:text-[120px] text-[51px] font-extrabold leading-[87.424%] tracking-[-2.5px] md:tracking-[-6px]">
                have a stupid
              </h1>
            </div>

            <div className="flex flex-row items-center sm:gap-8 gap-6 mt-2 justify-between">
              <p className="text-light-50 md:text-[80px] lg:text-[100px] xl:text-[120px] text-[51px] font-extrabold leading-[87.424%] tracking-[-2.5px] sm:tracking-[-6px]">
                idea?
              </p>
              <Link
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href="/contact"
                className="!no-underline hover:no-underline focus:outline-none outline-none border-2 rounded-full border-yellow-550 md:w-[280px] lg:w-[300px] xl:w-[350px] w-[168.37px] lg:h-[56px] sm:h-[50px] h-[40px] flex items-center justify-center text-center sm:text-sm text-xs tracking-[1.727px]"
              >
                <motion.p
                  className="sm:min-w-[150px] text-left sm:block hidden"
                  animate={{
                    x: hovered ? 190 : 0,
                  }}
                >
                  <ArrowForwardIcon className="text-light-50 hover:text-light-50" />
                </motion.p>
                <motion.p
                  className="sm:min-w-[150px] text-left sm:hidden block"
                  animate={{
                    x: hovered ? 100 : -50,
                  }}
                >
                  <ArrowForwardIcon
                    className="text-light-50 hover:text-light-50"
                    style={{ fontSize: "20px", fontWeight: 200 }}
                  />
                </motion.p>
                <motion.span
                  className={`${
                    hovered ? "sm:-ml-44 -ml-10" : "sm:-ml-36 -ml-32"
                  }  sm:min-w-[150px] min-w-[100px] uppercase !text-light-50 hover:text-light-50 sm:text-[18px] sm:font-extrabold font-bold text-[9px]`}
                  animate={{
                    x: hovered ? 0 : -100,
                    opacity: hovered ? 1 : 0,
                  }}
                >
                  WE’D LOVE TO CHAT
                </motion.span>
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:tracking-[3px] flex flex-row justify-between items-center sm:mt-[150px] mt-[50px] text-[10px] md:text-[15px] gap-4">
          <div className="uppercase sm:flex flex-col text-light-50 gap-1 hidden">
            <p>MIAMI, OPENING SOON</p>
          </div>
          <div className="uppercase flex flex-col text-light-50 gap-1">
            <span className="sm:hidden">MIAMI, OPENING SOON</span>
            <span>242 Applewood Cres</span>
            <span>Concord, ON L4K 4E5</span>
          </div>
          <div className="items-center gap-2 text-light-50 sm:hidden">
            <Link
              href="https://www.instagram.com/gridagencyinc/"
              className="hover:text-yellow-550 transition duration-300 ease-in-out"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/company/gridcommunications"
              className="hover:text-yellow-550 transition duration-300 ease-in-out"
            >
              <LinkedInIcon />
            </Link>
          </div>
          <div className="flex flex-row gap-4">
            <div className="uppercase flex flex-col text-light-50 sm:items-end gap-1">
              <span className="text-left underline">info@gridagenyinc.ca</span>
              <span className="text-left underline">(416) 557-4773</span>
            </div>
            <div className="sm:flex items-center gap-2 text-light-50 hidden">
              <Link
                href="https://www.instagram.com/gridagencyinc/"
                className="hover:text-yellow-550 transition duration-300 ease-in-out"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/company/gridcommunications"
                className="hover:text-yellow-550 transition duration-300 ease-in-out"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="uppercase w-full flex flex-col sm:flex-row justify-between sm:pt-10 pt-6 border-t border-1 border-light-50 border-dotted sm:mt-[80px] mt-[40px] gap-1">
          <p className="text-light-50 text-[10px] sm:text-left text-center">
            © {new Date().getFullYear()}, Grid Creative Advertising Inc.
          </p>
          <p className="text-light-50 text-[10px] sm:text-left text-center">
            privacy and cookie policy
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
