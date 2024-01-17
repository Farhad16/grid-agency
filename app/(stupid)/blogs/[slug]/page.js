"use client";
import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";
import React, { useEffect, useState } from "react";
import DividerElement from "@/components/shared/DividerElement";
import AnimateTitle from "@/components/case/AnimateTitle";
import HTMLParser from "@/components/shared/HTMLParser";
import NoDataFound from "@/components/shared/NoDataFound";
import { CircularProgress } from "@mui/material";
import { getBlogsById, getSelectedBlog } from "@/apis/blogs.api";

const Page = ({ params }) => {
  const id = params.slug;
  const [loading, setLoading] = useState(true);
  const [blogDetails, setBlogDetails] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogDetailsData = await getBlogsById(id);
        const selectedBlog = await getSelectedBlog();
        setSelected(selectedBlog);
        setBlogDetails(blogDetailsData);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
              <p className="text-[15px] font-semibold text-light-50 tracking-[3.75px] flex flex-row upperblog">
                {blogDetails.tags.map((name, i) => (
                  <>
                    <span key={id}>{name}</span>
                    {i !== blogDetails.tags?.length - 1 && " | "}
                  </>
                ))}
              </p>
            </Wrapper>
          </div>
          <Wrapper className="sm:mt-[150px] mt-24 flex flex-col gap-2">
            <DividerElement tag="Task">
              <HTMLParser content={blogDetails.meta_title || ""} />
            </DividerElement>
          </Wrapper>

          <Wrapper className="flex flex-col mt-[100px]">
            <HTMLParser content={blogDetails.meta_description} />
          </Wrapper>
          <div className="flex flex-col sm:mt-[250px] mt-[100px] gap-4 overflow-hidden border-bottom">
            <Wrapper className="sm:!px-[100px]">
              <p className="text-base sm:text-[26px] text-light-50 leading-[30px]">
                next <span className="font-extrabold">project</span>
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
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default Page;
