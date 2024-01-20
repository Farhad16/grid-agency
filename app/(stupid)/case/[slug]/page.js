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
  const slug = params.slug;

  const [loading, setLoading] = useState(true);
  const [caseDetails, setCaseDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const slug = params.slug;
        const caseDetailsData = await getCaseById(slug);
        setCaseDetails(caseDetailsData);
      } catch (error) {
        console.error("Error fetching case details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const noCaseDetailsExist = Boolean(
    caseDetails.data === null ||
      !caseDetails.data ||
      Object.keys(caseDetails.data).length === 0 ||
      caseDetails.data.error
  );

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen relative items-center justify-center">
      {loading ? (
        <CircularProgress
          className="text-light-50 mb-[100px]"
          style={{ color: "#E6E0D2" }}
        />
      ) : noCaseDetailsExist ? (
        <NoDataFound data="case details" className="pb-20 text-light-50" />
      ) : (
        <>
          <div className="flex flex-col w-full gap-6">
            <AnimateTitle
              title={caseDetails?.data.case_title}
              clientName={caseDetails.data.port_client}
            />
            <video
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${caseDetails.data.image_file}`}
              width="100%"
              height="100%"
              loop
              autoPlay
              muted
              className="w-full h-full cover"
            ></video>

            <Wrapper>
              <p className="text-[15px] font-semibold text-light-50 tracking-[3.75px] flex flex-row uppercase">
                {caseDetails.data.services.map((service, i) => (
                  <>
                    <span key={service.id}>{service}</span>
                    {i !== caseDetails.data.services?.length - 1 && " | "}
                  </>
                ))}
              </p>
            </Wrapper>
          </div>
          <Wrapper className="sm:mt-[150px] mt-24 flex flex-col gap-2">
            <DividerElement tag="Task">
              <HTMLParser content={caseDetails.data.task || ""} />
            </DividerElement>
          </Wrapper>

          <Wrapper className="flex flex-col mt-[100px] text-[24px] sm:text-[30px]">
            <HTMLParser content={caseDetails.data.description} />
          </Wrapper>
          <div className="flex flex-col sm:mt-[250px] mt-[100px] gap-4 overflow-hidden border-bottom">
            <Wrapper className="sm:!px-[100px]">
              <p className="text-base sm:text-[26px] text-light-50 leading-[30px]">
                next <span className="font-extrabold">project</span>
              </p>
            </Wrapper>

            <Wrapper className="max-h-[350px] sm:!px-[100px] !px-0">
              <a href={`/case/${caseDetails.related_case_study?.slug}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${caseDetails.related_case_study?.featured_video}`}
                  alt="pride"
                  className="sm:rounded-t-xl w-full h-full object-cover"
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