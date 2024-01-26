"use client";
import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import React, { useEffect, useState } from "react";
import AnimateTitle from "@/components/case/AnimateTitle";
import HTMLParser from "@/components/shared/HTMLParser";
import NoDataFound from "@/components/shared/NoDataFound";
import { CircularProgress } from "@mui/material";
import { getBlogsById } from "@/apis/blogs.api";

const Page = ({ params }) => {
  const slug = params.slug;
  const [loading, setLoading] = useState(true);
  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    const slug = params.slug;
    const fetchData = async () => {
      try {
        const blogDetailsData = await getBlogsById(slug);

        setBlogDetails(blogDetailsData);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  const noBlogDetailsExist = Boolean(
    !blogDetails ||
      blogDetails === null ||
      Object.keys(blogDetails).length === 0 ||
      blogDetails.error
  );

  return (
    <div className="flex flex-col text-light-50 bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen relative items-center justify-center">
      {loading ? (
        <CircularProgress
          className="text-light-50 mb-[100px]"
          style={{ color: "#E6E0D2" }}
        />
      ) : noBlogDetailsExist ? (
        <NoDataFound data="blog details" className="pb-20" />
      ) : (
        <>
          <div className="flex flex-col w-full gap-6">
            <AnimateTitle title={blogDetails.title} />
            <img
              src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${blogDetails.featured_image}`}
              layout="responsive"
              alt="blog"
              className="w-full h-full cover"
            />
            <Wrapper>
              <p className="text-[15px] font-semibold text-light-50 tracking-[3.75px] flex flex-row uppercase flex-wrap">
                {blogDetails.tags.map((service, i) => (
                  <>
                    <span key={service.id} className="mr-1">
                      {`${service} | `}
                    </span>
                  </>
                ))}
              </p>
            </Wrapper>
          </div>

          <Wrapper className="flex flex-col mt-[100px] text-[24px] sm:text-[30px] ">
            <HTMLParser content={blogDetails.description} />
          </Wrapper>
          {/* <div className="flex flex-col sm:mt-[250px] mt-[100px] gap-4 overflow-hidden border-bottom">
            <Wrapper className="sm:!px-[100px]">
              <p className="text-base sm:text-[26px] text-light-50 leading-[30px]">
                next <span className="font-extrabold">blog</span>
              </p>
            </Wrapper>

            <Wrapper className="max-h-[350px] sm:!px-[100px] !px-0">
              <a href={`/blogs/${selected[0].slug}`}>
                <img
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${selected[0].featured_image}`}
                  alt="pride"
                  className="sm:rounded-t-xl w-full h-full object-cover object-center"
                />
              </a>
            </Wrapper>
          </div> */}
        </>
      )}

      <Footer />
    </div>
  );
};

export default Page;
