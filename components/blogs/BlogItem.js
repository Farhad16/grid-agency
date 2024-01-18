import Link from "next/link";
import HTMLParser from "../shared/HTMLParser";

const BlogItem = ({ blog }) => {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="flex flex-col gap-4 relative hover:no-underline no-underline"
    >
      <img
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${blog.featured_image}`}
        alt="portimg"
        className="object-cover min-h-[560px] sm:h-[560px] w-full h-full"
      />

      <div className="flex gap-4 items-center text-[15px]">
        <p className="hover:text-yellow-550 text-yellow-550 font-extrabold uppercase">
          {blog.title}
        </p>
        <div className="hover:text-light-50 text-light-50 font-extrabold">
          <HTMLParser content={blog.description} />
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
