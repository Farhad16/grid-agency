import React from "react";
import NoDataFound from "../shared/NoDataFound";
import { getAllBlogs } from "@/apis/blogs.api";
import BlogItem from "./BlogItem";
import StupidBlogs from "./StupidBlogs";

const BlogData = async () => {
  const blogData = await getAllBlogs();

  return (
    <>
      <StupidBlogs />
      <div className="flex flex-col mt-24 sm:pb-[150px] pb-24 sm:mt-[200px] overflow-hidden items-center justify-center sm:px-[100px] px-4 !cursor-default">
        {blogData.length < 0 ? (
          <NoDataFound data="portfolio" />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
              {blogData.length > 0 &&
                blogData.map((blog) => (
                  <BlogItem key={blog.id} blog={blog} items={blogData.length} />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BlogData;
