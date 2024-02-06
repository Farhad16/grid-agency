"use client";
import { getAllBlogs } from "@/apis/blogs.api";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { lazy, useEffect, useMemo, useRef, useState } from "react";
import Footer from "../shared/Footer";
import NoDataFound from "../shared/NoDataFound";

const BlogsDesktop = lazy(() => import("./BlogsDesktop"));
const BlogMobile = lazy(() => import("./BlogMobile"));

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

const Services = () => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllBlogs();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div ref={ref}>
      <div className="sm:mt-[100px] mt-10 flex items-center justify-center flex-col py-4 min-h-[200px] sm:px-14 px-8 sm:mb-[200px] mb-24">
        <p className="text-light-50 md:text-[70px] lg:text-[100px] text-[40px]">
          <span className="font-extrabold tracking-[-2px] sm:tracking-[-5px] leading-[87.424%]">
            Stupid
          </span>{" "}
          <span className="font-light tracking-[-2px] sm:tracking-[-5px] leading-[87.424%]">
            enough?
          </span>
        </p>
        <Link
          href="/portfolio"
          className="no-underline hover:no-underline hover:bg-light-50 transition duration-300 ease bg-yellow-550 rotate-[2deg] inline-block text-[18px] sm:text-[29px] text-[#231F20] hover:text-[#231F20] px-4 sm:py-2 font-extrabold tracking-[-1.45px] sm:leading-normal sm:h-[60px]"
        >
          Boy, we got more
        </Link>
      </div>
      <div className="w-full h-full flex items-center justify-center bg-[#241f20]">
        {loading ? (
          <CircularProgress
            className="text-light-50 mb-[100px]"
            style={{ color: "#E6E0D2" }}
          />
        ) : blogData && blogData.length > 0 ? (
          <>
            {isVisible && <BlogsDesktop blogData={blogData} />}
            <BlogMobile blogData={blogData} />
          </>
        ) : (
          <NoDataFound data="blog" className="!text-light-50 py-20" />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
