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

  console.log(caseDetails?.data);
  const noCaseDetailsExist = Boolean(
    caseDetails.data === null ||
      !caseDetails.data ||
      Object.keys(caseDetails.data).length === 0 ||
      caseDetails.data.error
  );

  const checkFileExtension = (fileExtension) => {
    const isVideo = ["mp4", "avi", "mkv", "mov"].includes(fileExtension);
    return isVideo;
  };

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
            {checkFileExtension(
              caseDetails.data.image_file
                .substring(caseDetails.data.image_file.lastIndexOf(".") + 1)
                .toLowerCase()
            ) ? (
              <video
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${caseDetails.data.image_file}`}
                width="100%"
                height="100%"
                loop
                autoPlay
                muted
                className="w-full h-full cover"
              ></video>
            ) : (
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${caseDetails.data.image_file}`}
                width="100%"
                height="100%"
                loop
                autoPlay
                muted
                className="w-full h-full cover"
              />
            )}

            <Wrapper>
              <p className="text-[15px] font-semibold text-light-50 tracking-[3.75px] flex flex-row uppercase flex-wrap">
                {caseDetails.data.services.map((service, i) => (
                  <>
                    <span key={service.id} className="mr-1">
                      {`${service} | `}
                    </span>
                  </>
                ))}
              </p>
            </Wrapper>
          </div>

          <Wrapper className="my-28 sm:my-[200px] flex flex-col gap-2 ">
            <DividerElement tag="Task">
              <HTMLParser content={caseDetails.data.task || ""} />
            </DividerElement>
          </Wrapper>

          <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${caseDetails.data.featured_video}`}
            alt="featured_video"
          />
          <Wrapper className="flex flex-col mt-[100px] text-[24px] sm:text-[30px]">
            <HTMLParser content={caseDetails.data.description} />
          </Wrapper>
          <Wrapper className="mt-[100px] sm:mt-[200px] flex flex-col gap-3">
            {caseDetails.data.work_videos !== null &&
              caseDetails.data.work_videos &&
              caseDetails.data.work_videos.map((vi, i) => (
                <video
                  key={i}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${vi}`}
                  width="100%"
                  height="100%"
                  controls
                  className="w-full h-full cover"
                ></video>
              ))}
          </Wrapper>
          <div className="flex flex-col mt-[100px] sm:mt-[200px] gap-4 overflow-hidden border-bottom">
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
