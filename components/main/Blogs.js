"use client";
import { getAllBlogs } from "@/apis/blogs.api";
import { CircularProgress } from "@mui/material";
import { lazy, useEffect, useMemo, useRef, useState } from "react";
import Footer from "../shared/Footer";
import NoDataFound from "../shared/NoDataFound";
import StupidEnough from "./StupidEnough";

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
      <StupidEnough />
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
