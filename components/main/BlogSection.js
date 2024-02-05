"use client";
import { getAllBlogs } from "@/apis/blogs.api";
import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import NoDataFound from "../shared/NoDataFound";
import BlogMobile from "./BlogMobile";
import BlogScroll from "./BlogScroll";

const BlogSection = () => {
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
        <>
          <BlogScroll blogData={blogData} />
          <BlogMobile blogData={blogData} />
        </>
      ) : (
        <NoDataFound data="blog" className="!text-light-50 py-20" />
      )}
    </div>
  );
};

export default BlogSection;
