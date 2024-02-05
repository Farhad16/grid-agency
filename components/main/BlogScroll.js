import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import VerticleEl from "../shared/VerticleEl";

gsap.registerPlugin(ScrollTrigger);

const BlogScroll = ({ blogData }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 640 });

  useEffect(() => {
    const races = sectionRef.current;

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    let top = 40;
    if (isMobile) {
      top = 150;
    }
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `${getScrollAmount()}px`,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top top+=${top}`,
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

  return (
    <section className="overflow-hidden relative">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="flex relative flex-row">
          <VerticleEl className="left-[3%] top-[30%] z-10">
            STUPID TALKS
          </VerticleEl>
          <div className="flex background-text items-center justify-center px-[50px]">
            {blogData.map((talk, i) => (
              <div
                className="flex py-10 items-center w-[1000px] border z-10"
                key={talk.id}
              >
                <div
                  className={`flex flex-row z-10 pt-2 h-[100vh] ${
                    i % 2 === 0
                      ? "items-start"
                      : "items-end -mt-[80px] lg:-mt-[60px] 2xl:-mt-[150px]"
                  }`}
                >
                  <img
                    className="max-w-[450px] lg:max-w-[600px] 4xl:max-w-[750px] h-[250px] sm:h-[280px] lg:h-[385px] 4xl:h-[500px] rounded-xl"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${talk.featured_image}`}
                    alt="img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogScroll;
