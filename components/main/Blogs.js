import React, { useEffect, useState } from "react";
import NoDataFound from "../shared/NoDataFound";
import { CircularProgress } from "@mui/material";
import BlogsDesktop from "./BlogsDesktop";
import BlogMobile from "./BlogMobile";
import { getAllBlogs } from "@/apis/blogs.api";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [screenWidth]);

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
        <>
          <BlogsDesktop blogData={blogData} screenWidth={screenWidth} />
          <BlogMobile blogData={blogData} />
        </>
      ) : (
        <NoDataFound data="blog" className="!text-light-50 py-20" />
      )}
    </div>
  );
};

export default Services;
