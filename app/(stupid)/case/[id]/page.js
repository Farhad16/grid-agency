"use client";
import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import React, { useEffect, useState } from "react";
import DividerElement from "@/components/shared/DividerElement";
import { getCaseById } from "@/apis/case.api";
import AnimateTitle from "@/components/case/AnimateTitle";
import HTMLParser from "@/components/shared/HTMLParser";
import NoDataFound from "@/components/shared/NoDataFound";
import { CircularProgress } from "@mui/material";

const Page = ({ params }) => {
  const id = params.id;
  const [loading, setLoading] = useState(true);
  const [caseDetails, setCaseDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = params.id;
        const caseDetailsData = await getCaseById(id);
        setCaseDetails(caseDetailsData);
      } catch (error) {
        console.error("Error fetching case details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen relative items-center justify-center">
      {loading ? (
        <CircularProgress className="text-light-50 mb-[100px]" />
      ) : !caseDetails.casestudy.title ? (
        <NoDataFound data="case details" className="pb-20" />
      ) : (
        <>
          <div className="flex flex-col w-full gap-6">
            <AnimateTitle title={caseDetails.casestudy.title} />
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${caseDetails.casestudy.feature_image}`}
              layout="responsive"
              alt="case"
              className="w-full h-full cover"
            />
            <Wrapper>
              <p className="text-[15px] font-semibold text-light-50 tracking-[3.75px] flex flex-row uppercase">
                {caseDetails.services.map((service, i) => (
                  <>
                    <span key={service.id}>{service?.name}</span>
                    {i !== caseDetails.services?.length - 1 && " | "}
                  </>
                ))}
              </p>
            </Wrapper>
          </div>
          <Wrapper className="sm:mt-[150px] mt-24 flex flex-col gap-2">
            <DividerElement tag="Task">
              <HTMLParser content={caseDetails.casestudy?.task || ""} />
            </DividerElement>
          </Wrapper>

          <Wrapper className="flex flex-col mt-[100px]">
            <HTMLParser content={caseDetails.casestudy?.description} />
          </Wrapper>
          <div className="flex flex-col sm:mt-[250px] mt-[100px] gap-4 overflow-hidden border-bottom">
            <Wrapper className="sm:!px-[100px]">
              <p className="text-base sm:text-[26px] text-light-50 text-light-50 leading-[30px]">
                next <span className="font-extrabold">project</span>
              </p>
            </Wrapper>

            <Wrapper className="max-h-[350px] sm:!px-[100px] !px-0">
              <a href={`/case/${caseDetails.related_case_study?.id}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${caseDetails.related_case_study?.feature_image}`}
                  alt="pride"
                  className="sm:rounded-t-xl w-full h-full"
                />
              </a>
            </Wrapper>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Page;
