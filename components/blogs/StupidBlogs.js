import React from "react";

const StupidBlogs = async () => {
  return (
    <div className="flex sm:flex-row flex-col items-end justify-between sm:px-[100px] px-14">
      <div className="flex flex-col relative">
        <div className="flex gap-6">
          <img
            src="/assets/main_page/stupid.png"
            alt="stupid"
            className="md:w-[327px] md:h-[174px] w-[157px] h-[100px] z-10"
          />
          <img
            src="/assets/main_page/Sparkle.gif"
            alt="stupid"
            className="sm:w-[130px] sm:h-[130px] w-[70px] h-[70px]"
          />
        </div>
        <p className="z-0 lowercase text-[50px] md:text-[150px] text-light-50 sm:tracking-[-7.5px] tracking-[-2.5px] absolute sm:top-[30%] top-[60%] font-extrabold leading-[107.231%]">
          Blogs
        </p>
      </div>
    </div>
  );
};

export default StupidBlogs;
