import React from "react";
import NoDataFound from "../shared/NoDataFound";
import BlogItem from "./BlogItem";
import StupidBlogs from "./StupidBlogs";

const BlogData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs`);
  const blogData = await res.json();

  return (
    <>
      <StupidBlogs />
      <div className="flex flex-col mt-24 sm:pb-[150px] pb-24 sm:mt-[200px] overflow-hidden items-center justify-center sm:px-[100px] px-4 !cursor-default">
        {!blogData.data.length ? (
          <NoDataFound data="portfolio" />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10 lg:gap-6 w-full mb-12">
              {blogData.data.length > 0 &&
                blogData.data.map((blog) => (
                  <BlogItem key={blog.id} blog={blog} />
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BlogData;
