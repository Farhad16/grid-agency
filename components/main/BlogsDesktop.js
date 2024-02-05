import dayjs from "dayjs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import VerticleEl from "../shared/VerticleEl";

gsap.registerPlugin(ScrollTrigger);

const BlogsDesktop = ({ blogData }) => {
  useEffect(() => {
    const races = document.getElementById("blogsSection");

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth + 50 - window.innerWidth);
    }

    const pin = gsap.fromTo(
      races,
      {
        translateX: 0,
      },
      {
        translateX: `${getScrollAmount()}px`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: "#triggerElement",
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
    <section className="overflow-hidden relative sm:block hidden">
      <div id="triggerElement">
        <div id="blogsSection" className="flex relative flex-row">
          <div className="flex background-text pt-[50px] items-center justify-center px-[100px]">
            <div className="flex gap-56 xl:gap-60 z-10">
              <VerticleEl className="sm:-left-[3%] sm:top-[30%] md:left-[0%] lg:left-[0%] !text-light-50 z-10">
                STUPID TALKS
              </VerticleEl>
              {blogData.map((talk, i) => (
                <div
                  key={talk.id}
                  className="relative w-[350px] h-[500px] sm:w-[450px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[710px] lg:h-[800px] 5xl:w-[850px] 5xl:h-[900px] mb-[50px]"
                  style={{
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% auto",
                    backgroundPosition: "top",
                  }}
                >
                  <div
                    className={`flex flex-row z-10 pt-2 h-[100vh] ${
                      i % 2 === 0
                        ? "items-start"
                        : "items-end -mt-[80px] lg:-mt-[60px] 2xl:-mt-[150px]"
                    }`}
                    key={i}
                  >
                    <div className="flex gap-6 items-start">
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
                        {dayjs(talk.created_at).format("DD MMM YYYY")}
                      </p>
                    </div>
                    {i === blogData.length - 1 && (
                      <p
                        onClick={workRoute}
                        className="-rotate-90 absolute cursor-pointer gap-4 -right-[50%] lg:-right-[35%] top-[60%] font-extralight text-xs sm:text-[21px] tracking-[6.93px] !text-yellow-550 z-10 flex flex-row"
                      >
                        <span>READ </span> <span>MORE</span>
                      </p>
                    )}
                  </div>
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
