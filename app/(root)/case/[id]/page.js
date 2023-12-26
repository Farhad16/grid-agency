"use client";
import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Divider } from "@mui/material";

const Page = ({ params }) => {
  const id = params.id;

  return (
    <div className="flex flex-col text-white bg-[#0A0808] pt-20 sm:pt-[200px] min-h-screen relative">
      <div className="flex flex-col w-full gap-6">
        <Wrapper className="w-full">
          <motion.div
            className="flex flex-row justify-between mb-6 w-full"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
          >
            <p className="text-light-50 md:text-[60px] lg:text-[80px] text-4xl font-bold">
              Super Bowl Special
            </p>
            <p className="text-yellow-550 tracking-[3.75px] flex items-end font-bold">
              OSMOW'S
            </p>
          </motion.div>
        </Wrapper>

        <Image
          src="/assets/case/case.gif"
          alt="case"
          layout="responsive"
          width={100}
          height={100}
        />
        <Wrapper>
          <p className="text-[15px] font-bold text-light-50 tracking-[3.75px]">
            CONTENT CREATION | VIDEO PRODUCTION
          </p>
        </Wrapper>
      </div>
      <Wrapper className="sm:mt-[150px] mt-24 flex flex-col gap-2">
        <p className="text-2xl sm:text-3xl text-yellow-550">Task</p>
        <div className="flex flex-col justify-between grid sm:grid-cols-4 grid-col-1 gap-6">
          <Divider className="w-[2px] h-16 bg-[#E6E0D2] col-span-1 ml-2" />
          <p className="text-base sm:text-[26px] text-light-50 sm:col-span-3 col-span-1 font-light">
            Produce a video for that showcases their core menu item, chicken on
            the rocks at their special promotional price of $7.99.
          </p>
        </div>
      </Wrapper>
      <div className="sm:mt-[150px] mt-24 flex flex-col gap-2">
        <Image
          src="/assets/case/dish.png"
          alt="dish"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <Wrapper className="flex flex-col mt-[100px]">
        <p className="text-base sm:text-[26px] text-light-50 font-light leading-[30px]">
          Our restaurant videography experts helped the National Canadian
          restaurant, Osmow’s create a video to help promote their Chicken on
          the Rocks at their promotional price of $7.99. We also helped through
          leveraging the existing footage so that it could be repurposed as an
          instagram reel video to promote their SuperBowl special.
        </p>
        <p className="text-base sm:text-[26px] text-light-50 font-bold mt-10 leading-[30px]">
          Good food and <span className="underline">restaurant videos</span>
          make you want to buy a specific food or prepare a specific dish.
          Creating these videos at the right angle with the right lighting
          settings will make your customers’ mouth water, and the transitions
          will keep your customers watching until the end.
        </p>
      </Wrapper>
      <Wrapper className="flex flex-col sm:mt-[150px] my-24 gap-4 max-h-[486px] overflow-hidden mb-[100px]">
        <p className="text-base sm:text-[26px] text-light-50 font-light leading-[30px]">
          next <span className="font-bold">project</span>
        </p>
        <div className="max-h"></div>
        <Image
          src="/assets/case/pride.gif"
          alt="pride"
          layout="responsive"
          width={100}
          height={100}
          className="rounded-xl"
        />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Page;
