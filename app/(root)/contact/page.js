import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col text-white bg-[#0A0808] ">
      <div
        className="min-h-[800px] pt-20 sm:pt-[200px] relative"
        style={{
          backgroundImage: "url('/assets/contact/contact-bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Wrapper className="w-full flex flex-col">
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
                  <div className="bg-[#F9BC32] rotate-[2deg] inline-block w-fit text-sm sm:text-[29px] text-[#231F20] px-4 sm:py-2 font-bold">
                    talk to us
                  </div>
                  <p className="text-[#E6E0D2] md:text-[100px] lg:text-[130px] text-6xl font-bold">
                    have a
                  </p>
                </div>
                <Image
                  src="/assets/main_page/Cat.gif"
                  alt="cat"
                  width={150}
                  height={150}
                  className="sm:max-w-[150px] max-w-[100px]"
                />
              </div>
              <p className="text-[#E6E0D2] md:text-[100px] lg:text-[130px] text-6xl font-bold relative">
                project in <br /> mind?
              </p>
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
    </div>
  );
};

export default Page;
