import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";
import DividerElement from "@/components/shared/DividerElement";
import { getCaseById } from "@/apis/case.api";
import AnimateTitle from "@/components/case/AnimateTitle";

const Page = async ({ params }) => {
  const id = params.id;
  const caseDetails = getCaseById(id);
  console.log(caseDetails);

  return (
    <div className="flex flex-col text-white bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen relative">
      <div className="flex flex-col w-full gap-6">
        <AnimateTitle />

        <Image
          src="/assets/case/case.gif"
          alt="case"
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
        />
        <Wrapper>
          <p className="text-[15px] font-bold text-light-50 tracking-[3.75px]">
            CONTENT CREATION | VIDEO PRODUCTION
          </p>
        </Wrapper>
      </div>
      <Wrapper className="sm:mt-[150px] mt-24 flex flex-col gap-2">
        <DividerElement tag="Task">
          Produce a video for that showcases their core menu item, chicken on
          the rocks at their special promotional price of $7.99.
        </DividerElement>
      </Wrapper>
      <div className="sm:mt-[150px] mt-24 flex flex-col gap-2">
        <Image
          src="/assets/case/dish.png"
          alt="dish"
          layout="responsive"
          width={100}
          height={100}
          objectFit="cover"
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
          objectFit="cover"
        />
      </Wrapper>
      <Footer />
    </div>
  );
};

export default Page;
