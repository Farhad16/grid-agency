import dayjs from "dayjs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import VerticleEl from "../shared/VerticleEl";

gsap.registerPlugin(ScrollTrigger);

const BlogsDesktop = ({ blogData }) => {
  const blogSection = useRef(null);

  useEffect(() => {
    const blogs = blogSection.current;

    function getScrollAmount() {
      let racesWidth = blogs.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const pin = gsap.fromTo(
      ".blog-inner",
      {
        translateX: 0,
      },
      {
        translateX: `${getScrollAmount()}px`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: ".blog-outer",
          start: `top top+=50`,
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  const router = useRouter();
  const workRoute = () => {
    router.push("/blogs");
  };

  return (
    <section className="overflow-hidden relative">
      <div className="blog-outer">
        <div ref={blogSection} className="flex relative flex-row blog-inner">
          <div className="flex background-text pt-[50px] items-center justify-center px-[100px]">
            <div className="flex gap-48 z-10">
              <VerticleEl className="-left-[2%] top-[50%] z-10">
                STUPID TALKS
              </VerticleEl>
              {blogData.map((talk, i) => (
                <div key={talk.id} className="relative h-screen">
                  <div
                    className={`flex gap-6 items-start ${
                      i % 2 === 0 ? "mt-0" : "mt-[100px] lg:mt-[150px]"
                    }`}
                  >
                    <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end text-yellow-550">
                      0{i + 1}
                    </span>
                    <div className="relative">
                      <img
                        className="max-w-[450px] lg:max-w-[600px] 4xl:max-w-[750px] h-[250px] sm:h-[280px] lg:h-[385px] 4xl:h-[500px] rounded-xl"
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${talk.featured_image}`}
                        alt="img"
                      />
                      <Link
                        href={`/blogs/${talk.slug}`}
                        className="hover:no-underline no-underline active:bg-yellow-600 hover:text-light-50 font-extrabold absolute text-4xl sm:text-[60px] lg:text-[70px] 4xl:text-[80px] text-light-50 top-[40%] -right-[20%] sm:-right-[30%] lg:-right-[40%] w-[100%] sm:leading-[70px] tracking-[-3.5px] hover:bg-yellow-600 transition duration-300 ease px-8"
                      >
                        {talk.title}
                      </Link>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg font-normal tracking-widest ml-8 w-[140px]">
                      {dayjs(talk.date).format("DD MMM YYYY")}
                    </p>
                  </div>
                  {i === blogData.length - 1 && (
                    <VerticleEl
                      className="-right-[12%] top-[40%] z-10 !text-yellow-550"
                      onClick={workRoute}
                    >
                      READ MORE
                    </VerticleEl>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsDesktop;
