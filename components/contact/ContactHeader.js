import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import FormInput from "./FormInput";

const ContactHeader = () => {
  return (
    <Wrapper className="w-full flex flex-col py-20 sm:py-[150px] relative contact-bg">
      <div className="flex flex-col md:flex-row gap-24 items-center">
        <img
          src="/assets/footer/footer.gif"
          layout="responsive"
          className="w-[308px]"
          alt="footergif"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <div className="flex flex-col inline-block ">
              <div className="bg-yellow-550 rotate-[2deg] inline-block w-fit text-sm sm:text-[29px] text-[#231F20] px-4 sm:py-2 font-bold">
                talk to us
              </div>
              <p className="text-light-50 md:text-[100px] lg:text-[130px] text-6xl font-bold">
                have a
              </p>
            </div>
            <Image
              src="/assets/main_page/Cat.gif"
              alt="cat"
              width={150}
              height={150}
              className="sm:max-w-[150px] max-w-[100px]"
              objectFit="cover"
            />
          </div>
          <div className="text-light-50 md:text-[100px] lg:text-[130px] text-6xl font-bold relative">
            project in
            <img
              src="/assets/contact/lines.png"
              alt="lines"
              className="absolute w-[60%] top-20 -left-4"
            />
            mind?
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-16 mt-[100px]">
        <div className="flex flex-col gap-16 col-span-1">
          <div className="flex flex-col">
            <p className="bg-yellow-550 rotate-[2deg] inline-block w-fit text-sm sm:text-[29px] text-[#231F20] px-4 sm:py-2 font-bold">
              prefer email?
            </p>
            <p className="text-light-50 text-base md:text-[20px] lg:text-[30px] font-bold sm:!leading-[40px]">
              You can reach us at
              <br />
              <span className="text-yellow-550 underline break-words">
                info@gridagencyinc.ca
              </span>
            </p>
          </div>
          <div className="flex flex-col">
            <p className="bg-yellow-550 -rotate-[2deg] inline-block w-fit text-sm sm:text-[29px] text-[#231F20] px-4 sm:py-2 font-bold">
              prefer docs?
            </p>
            <p className="text-light-50 md:text-[26px] lg:text-[30px] font-bold sm:!leading-[40px]">
              check out our
              <br />
              <span className="text-yellow-550 underline">pricing slide</span>
            </p>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1 flex flex-col gap-6">
          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <FormInput label="Name*" />
            <FormInput label="Company*" />
          </div>
          <FormInput label="Email adress*" />
          <div className="flex sm:flex-row flex-col gap-4 w-full">
            <FormInput label="Subject" />
            <FormInput label="How can we help?" />
          </div>
          <FormInput label="Project details" textarea={true} />
          <button className="text-yellow-550 hover:bg-yellow-550 hover:bg-opacity-20 focus:outline-none outline-none group flex items-center border border-2 rounded-full border-yellow-550 transition duration-300 py-[10px] px-[32px] w-fit">
            GET A QUOTE
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactHeader;
