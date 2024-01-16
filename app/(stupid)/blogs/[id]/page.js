"use client";
import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import React, { useEffect, useState } from "react";
import DividerElement from "@/components/shared/DividerElement";
import AnimateTitle from "@/components/case/AnimateTitle";
import HTMLParser from "@/components/shared/HTMLParser";
import NoDataFound from "@/components/shared/NoDataFound";
import { CircularProgress } from "@mui/material";
import { getBlogsById } from "@/apis/blogs.api";

const Page = ({ params }) => {
  const id = params.id;
  const [loading, setLoading] = useState(true);
  const [blogDetails, setblogDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = params.id;
        const blogDetailsData = await getBlogsById(id);
        setblogDetails(blogDetailsData);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen relative items-center justify-center">
      {loading ? (
        <CircularProgress
          className="text-light-50 mb-[100px]"
          style={{ color: "#E6E0D2" }}
        />
      ) : !blogDetails.blogstudy.title ? (
        <NoDataFound data="blog details" className="pb-20" />
      ) : (
        <>
          <div className="flex flex-col w-full gap-6">
            <AnimateTitle title={blogDetails.blogstudy.title} />
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${blogDetails.blogstudy.feature_image}`}
              layout="responsive"
              alt="blog"
              className="w-full h-full cover"
            />
            <Wrapper>
              <p className="text-[15px] font-semibold text-light-50 tracking-[3.75px] flex flex-row upperblog">
                {blogDetails.services.map((service, i) => (
                  <>
                    <span key={service.id}>{service?.name}</span>
                    {i !== blogDetails.services?.length - 1 && " | "}
                  </>
                ))}
              </p>
            </Wrapper>
          </div>
          <Wrapper className="sm:mt-[150px] mt-24 flex flex-col gap-2">
            <DividerElement tag="Task">
              <HTMLParser content={blogDetails.blogstudy?.task || ""} />
            </DividerElement>
          </Wrapper>

          <Wrapper className="flex flex-col mt-[100px]">
            <HTMLParser content={blogDetails.blogstudy?.description} />
          </Wrapper>
          <div className="flex flex-col sm:mt-[250px] mt-[100px] gap-4 overflow-hidden border-bottom">
            <Wrapper className="sm:!px-[100px]">
              <p className="text-base sm:text-[26px] text-light-50 leading-[30px]">
                next <span className="font-extrabold">project</span>
              </p>
            </Wrapper>

            <Wrapper className="max-h-[350px] sm:!px-[100px] !px-0">
              <a href={`/blog/${blogDetails.related_blog_study?.id}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${blogDetails.related_blog_study?.feature_image}`}
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
