import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import DividerElement from "@/components/shared/DividerElement";
import { getCaseById } from "@/apis/case.api";
import AnimateTitle from "@/components/case/AnimateTitle";
import HTMLParser from "@/components/shared/HTMLParser";
import NoDataFound from "@/components/shared/NoDataFound";

const Page = async ({ params }) => {
  const id = params.id;
  const caseDetails = await getCaseById(id);
  const { casestudy, services, related_case_study } = caseDetails;

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen relative">
      {!casestudy?.title ? (
        <NoDataFound data="case details" className="pb-20" />
      ) : (
        <>
          <div className="flex flex-col w-full gap-6">
            <AnimateTitle title={casestudy?.title} />
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${casestudy?.feature_image}`}
              layout="responsive"
              alt="case"
              className="w-full h-full cover"
            />
            <Wrapper>
              <p className="text-[15px] font-semibold text-light-50 tracking-[3.75px] flex flex-row uppercase">
                {services.map((service, i) => (
                  <>
                    <span key={service.id}>{service?.name}</span>
                    {i !== services?.length - 1 && " | "}
                  </>
                ))}
              </p>
            </Wrapper>
          </div>
          <Wrapper className="sm:mt-[150px] mt-24 flex flex-col gap-2">
            <DividerElement tag="Task">
              <HTMLParser content={casestudy?.task || ""} />
            </DividerElement>
          </Wrapper>

          <Wrapper className="flex flex-col mt-[100px]">
            <HTMLParser content={casestudy?.description} />
          </Wrapper>
          <Wrapper className="flex flex-col sm:mt-[250px] mt-[100px] gap-4 overflow-hidden border-bottom">
            <p className="text-base sm:text-[26px] text-light-50 text-light-50 leading-[30px]">
              next <span className="font-extrabold">project</span>
            </p>
            <div className="max-h-[350px]">
              <a href={`/case/${related_case_study?.id}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${related_case_study?.feature_image}`}
                  alt="pride"
                  className="rounded-t-xl w-full h-full"
                />
              </a>
            </div>
          </Wrapper>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Page;
