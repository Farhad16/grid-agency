import React from "react";
import VerticleEl from "../shared/VerticleEl";
import Link from "next/link";
import dayjs from "dayjs";

const BlogMobile = ({ blogData }) => {
  return (
    <div className="pb-6 w-full relative block">
      <div className="background-text-verticle"></div>
      <VerticleEl className="-left-[10%] top-[30%] !text-light-50 z-10 text-[#e6e0d22e] tracking-[3.96px]">
        STUPID TALKS
      </VerticleEl>
      {blogData.slice(0, 2).map((talk, i) => (
        <div
          className="flex flex-col pt-2 items-center justify-center gap-12"
          key={i}
        >
          <div className="flex flex-col gap-6">
            <p className="text-sm font-normal tracking-[3.171px] z-10 text-right text-[#e6e0d22e]">
              {dayjs(talk.created_at).format("DD MMMM YYYY")}
            </p>
            <div className="flex flex-row items-start gap-2">
              <span className="font-extrabold text-lg text-left flex items-end justify-end text-yellow-550 z-10">
                0{i + 1}
              </span>
              <div className="relative">
                <img
                  className="w-[313.488px] h-[233.417px] rounded-xl"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${talk.featured_image}`}
                  alt="img"
                />
                <Link
                  href={`/blogs/${talk.slug}`}
                  className="no-underline focus:bg-yellow-600 outline-none hover:no-underline font-extrabold absolute text-[32px] text-light-50 top-[30%] left-[10%] leading-[94.937%] tracking-[-1.63px] hover:bg-yellow-600 transition duration-300 ease"
                >
                  {talk.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Link href="/blogs">
        <p className="no-underline hover:no-underline hover:!text-yellow-550 text-center !text-yellow-550 z-[9999] tracking-[3.96px] pt-16">
          READ MORE
        </p>
      </Link>
    </div>
  );
};

export default BlogMobile;
