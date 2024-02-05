"use client";
import { getAllBlogs } from "@/apis/blogs.api";
import { CircularProgress } from "@mui/material";
import { Suspense, lazy, useEffect, useState } from "react";
import NoDataFound from "../shared/NoDataFound";

const BlogsDesktop = lazy(() => import("./BlogsDesktop"));
const BlogMobile = lazy(() => import("./BlogMobile"));

const Services = () => {
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
    <div className="w-full h-full flex items-center justify-center bg-[#241f20]">
      {loading ? (
        <CircularProgress
          className="text-light-50 mb-[100px]"
          style={{ color: "#E6E0D2" }}
        />
      ) : blogData && blogData.length > 0 ? (
        <Suspense
          fallback={
            <CircularProgress
              className="text-light-50 mb-[100px]"
              style={{ color: "#E6E0D2" }}
            />
          }
        >
          <>
            <BlogsDesktop blogData={blogData} />
            <BlogMobile blogData={blogData} />
          </>
        </Suspense>
      ) : (
        <NoDataFound data="blog" className="!text-light-50 py-20" />
      )}
    </div>
  );
};

export default Services;
