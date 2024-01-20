import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import VerticleEl from "../shared/VerticleEl";

gsap.registerPlugin(ScrollTrigger);

const BlogsDesktop = ({ blogData, screenWidth }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  function getScreenWidth() {
    if (screenWidth > 2250) {
      return "-40vw";
    } else if (screenWidth > 2000 && screenWidth <= 2250) {
      return "-55vw";
    } else if (screenWidth > 1950 && screenWidth <= 2000) {
      return "-60vw";
    } else if (screenWidth > 1650 && screenWidth <= 1950) {
      return "-90vw";
    } else if ((screenWidth) => 1400 && screenWidth <= 1650) {
      return "-125vw";
    } else if (screenWidth >= 900 && screenWidth < 1400) {
      return "-185vw";
    } else if (screenWidth >= 700 && screenWidth < 900) {
      return "-225vw";
    } else if (screenWidth < 700) {
      return "-290vw";
    }
  }

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `${getScreenWidth()}`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top top+=50`,
          end: "2000 top",
          scrub: 0.6,
          pin: true,
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
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex relative flex-row">
          <div className="flex background-text xl:pr-[300px] pt-[50px] items-center justify-center">
            <div className="flex gap-72 mr-[300px] px-[150px] mt-6">
              <VerticleEl className="sm:-left-[3%] sm:top-[30%] md:left-[0%] lg:left-[0%] !text-light-50 z-10">
                STUPID TALKS
              </VerticleEl>
              {blogData.map((talk, i) => (
                <div
                  key={talk.id}
                  className="relative w-[350px] h-[500px] sm:w-[450px] sm:h-[500px] md:w-[500px] md:h-[600px] lg:w-[710px] lg:h-[800px] mb-[50px] z-10"
                >
                  <div
                    className={`flex flex-row lg:min-w-[900px] sm:min-w-[750px] min-w-[600px] z-10 pt-2 h-[100vh] ${
                      i % 2 === 0
                        ? "items-start"
                        : "items-end sm:mt-[-150px] md:mt-[-120px]"
                    }`}
                    key={i}
                  >
                    <div className="flex gap-6 items-start relative">
                      <span className="font-extrabold text-lg sm:text-[40px] text-left flex items-end justify-end text-yellow-550">
                        {talk.serial}
                      </span>
                      <div className="relative">
                        <img
                          className="sm:max-w-[450px] lg:max-w-[600px] 4xl:max-w-[700px] h-[250px] sm:h-[280px] lg:h-[385px] 4xl:h-[425px] rounded-xl"
                          src={talk.img}
                          alt="img"
                        />
                        <Link
                          href={`/blogs/${talk.id}`}
                          className="hover:no-underline no-underline hover:text-light-50 font-extrabold absolute text-4xl sm:text-[60px] lg:text-[70px] text-light-50 top-[40%] sm:-right-[200px] -right-[100px] sm:leading-[70px] tracking-[-3.5px] hover:bg-yellow-600 transition duration-300 ease px-8"
                        >
                          {talk.about}
                        </Link>
                      </div>
                      <p className="text-sm md:text-base lg:text-lg font-normal tracking-widest ml-8 w-[140px]">
                        {talk.date}
                      </p>
                      {i === blogData.length - 1 && (
                        <VerticleEl className="-rotate-90 font-extralight text-xs sm:text-[21px]tracking-[6.93px] !text-yellow-550 z-10 absolute lg:-right-[20%] 3xl:-right-[15%] top-[40%]">
                          <span onClick={workRoute} className="cursor-pointer">
                            READ MORE
                          </span>
                        </VerticleEl>
                      )}
                    </div>
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
