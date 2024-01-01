import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";
import DividerElement from "@/components/shared/DividerElement";
import { getCaseById } from "@/apis/case.api";
import AnimateTitle from "@/components/case/AnimateTitle";
import HTMLParser from "@/components/shared/HTMLParser";
import NoDataFound from "@/components/shared/NoDataFound";

const Page = async ({ params }) => {
  const id = params.id;
  const caseDetails = await getCaseById(id);

  return (
    <div className="flex flex-col text-white bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen relative">
      {!caseDetails.title ? (
        <NoDataFound data="case details" className="pb-20" />
      ) : (
        <>
          <div className="flex flex-col w-full gap-6">
            <AnimateTitle title={caseDetails.title} />

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
              <HTMLParser content={caseDetails.task || ""} />
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
            <HTMLParser content={caseDetails.description} />
            {/* <p className="text-base sm:text-[26px] text-light-50 text-light-50 leading-[30px]">
              Our restaurant videography experts helped the National Canadian
              restaurant, Osmow’s create a video to help promote their Chicken
              on the Rocks at their promotional price of $7.99. We also helped
              through leveraging the existing footage so that it could be
              repurposed as an instagram reel video to promote their SuperBowl
              special.
            </p>
            <p className="text-base sm:text-[26px] text-light-50 font-bold mt-10 leading-[30px]">
              Good food and <span className="underline">restaurant videos</span>{" "}
              make you want to buy a specific food or prepare a specific dish.
              Creating these videos at the right angle with the right lighting
              settings will make your customers’ mouth water, and the
              transitions will keep your customers watching until the end.
            </p> */}
          </Wrapper>
          <Wrapper className="flex flex-col sm:mt-[250px] mt-[100px] gap-4 overflow-hidden border-bottom">
            <p className="text-base sm:text-[26px] text-light-50 text-light-50 leading-[30px]">
              next <span className="font-bold">project</span>
            </p>
            <div className="max-h-[350px]">
              <img
                src="/assets/case/pride.gif"
                alt="pride"
                className="rounded-t-xl w-full h-full"
              />
            </div>
          </Wrapper>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Page;
