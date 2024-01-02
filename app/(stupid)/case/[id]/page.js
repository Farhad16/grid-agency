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
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${caseDetails.feature_image}`}
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

          <Wrapper className="flex flex-col mt-[100px]">
            <HTMLParser content={caseDetails.description} />
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
