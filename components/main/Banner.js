import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
      ),
    [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

const Banner = ({ setHideScrollButton }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      setHideScrollButton(true);
      localStorage.setItem("firstLoad", "yes");
    }
  }, [isVisible]);

  return (
    <Wrapper
      className="flex items-center justify-center sm:px-[100px] px-14 banner overflow-hidden pt-[100px] sm:pt-0 !font-manrope"
      id="banner"
    >
      <div className="flex flex-col" ref={ref}>
        <p className="text-light-50 text-4xl md:text-[40px] lg:text-[60px] font-extrabold -mb-2 sm:mb-3">
          We make
        </p>
        <div className="flex flex-col w-fit">
          <div className="flex items-center relative text-light-50 text-[120px] sm:text-[180px] md:text-[220px] lg:text-[312px] font-extrabold leading-[100px] sm:leading-[200px] md:tracking-[-15.6px] tracking-[-5px]">
            stup
            <div className="relative">
              i
              <Image
                src="/assets/main_page/Cat.gif"
                alt="cat"
                width={220}
                height={220}
                className="absolute -left-[60%] -top-[30%] sm:-top-[10%] sm:-left-[20%] lg:-top-[40%] lg:-left-[40%] max-w-[70px] sm:max-w-[100px] sm:w-[100px] md:w-[150px] lg:max-w-[220px]"
              />
            </div>
            d
            <Image
              src="/assets/main_page/line.png"
              alt="line"
              width={515}
              height={515}
              layout="responsive"
              className="absolute -bottom-[10px] sm:-bottom-[90px] left-0 sm:max-w-[515px] max-w-[150px]"
            />
          </div>
          <div className="flex flex-row items-center justify-end md:mt-4 lg:mt-6 mr-[-10px] md:mr-[-20px]">
            <img
              src="/assets/main_page/text-ani.gif"
              alt="animated"
              className="w-[150px] sm:w-[250px] lg:w-[350px] lg:h-[80px]"
            />
          </div>
        </div>
        <div className="relative mt-[220px] flex items-center sm:!justify-start justify-center">
          <VerticleEl className="-left-16 -top-8 md:-left-[24%] md:top-[-20%] lg:-left-[180px] lg:top-14 ">
            WHO WE ARE
          </VerticleEl>
          <p className="sm:leading-normal leading-[34px] text-light-50 text-[24px] md:text-[28px] lg:text-[34px] font-medium sm:tracking-[-1.7px] tracking-[-1.25px] sm:!text-left text-center">
            We are the catalyst for
            <br />
            turning{" "}
            <span className="text-yellow-550 font-extrabold">
              unconventional <br /> ideas into realities.
            </span>
          </p>
        </div>
        <div className="relative mt-[220px] flex items-center sm:!justify-end justify-center">
          <VerticleEl className="-right-2 -top-48 md:right-[-5%] md:-top-[100%] lg:-right-[120px] lg:top-14  rotate-[0deg]">
            <Image
              src="/assets/main_page/line-v.png"
              alt="line"
              width={100}
              height={100}
              layout="responsive"
              className="!h-[277px] !w-[2px]"
            />
          </VerticleEl>
          <p className="sm:leading-normal leading-[34px] text-light-50 text-[24px] md:text-[28px] lg:text-[34px] font-medium sm:tracking-[-1.7px] tracking-[-1.25px] sm:!text-right text-center">
            We leverage our expertise in ideation,
            <br className="md:block hidden" />
            content creation, video production, and
            <br className="md:block hidden" /> communication solutions to
            consistently
            <br />
            <span className="text-yellow-550 font-extrabold">
              redefine what's attainable.
            </span>
          </p>
        </div>
        <div className="mt-[220px] mb-[150px]">
          <p className="text-light-50 text-[28px] md:text-[40px] lg:text-[54px] font-medium text-center sm:tracking-[-2.7px] tracking-[-1.05px] sm:leading-normal leading-[34px]">
            We transform the seemingly ‘stupid’
            <br />
            <span className="bg-yellow-550 rotate-[2deg] inline-block text-[#231F20] mt-2 font-extrabold py-3 sm:px-4 sm:leading-[40px] leading-[19px]">
              into innovative outcomes.
            </span>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
