import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const Pride = () => {
  return (
    <div className="flex flex-col w-full pb-16">
      <Wrapper className="sm:mt-36 mt-20 flex flex-col mb-4 sm:!px-[100px] !px-14">
        <p className="text-yellow-550 md:text-xl uppercase text-[15px] tracking-[4.5px] font-extrabold">
          JAGERMEISTER
        </p>
        <p className="text-light-50 text-[30px] md:text-[40px] lg:text-[90px] font-extrabold sm:tracking-[-4.5px] tracking-[-1.5px] sm:leading-[78.682px] leading-[26.227px]">
          PrideMeister
        </p>
      </Wrapper>

      <Wrapper className="sm:!px-[100px] !px-0">
        <div className="w-full group relative">
          <img
            src="/assets/main_page/pride.gif"
            alt="pride"
            className="sm:rounded-xl w-full h-full"
          />
          <img
            src="/assets/main_page/pride.gif"
            alt="stupid"
            className="absolute right-20 md:right-40 sm:w-[84px] sm:h-[61px] w-[40px] h-[15px] clip-path-triangle"
          />
          <Link href="/case/1">
            <img
              src="/assets/main_page/hover.png"
              alt="hover"
              className="sm:rounded-xl opacity-10 w-full h-full absolute top-0 flex items-center justify-center group-hover:h-full group-hover:opacity-90 duration-500 group-hover:visible"
            />
            <div className="absolute right-20 md:right-40 sm:w-[84px] sm:h-[61px] w-[40px] h-[15px] clip-path-triangle bg-[#282425] bg-opacity-0 group-hover:bg-opacity-90 duration-500" />
          </Link>
        </div>
      </Wrapper>

      <div className="sm:px-[100px] px-14">
        <p className="md:text-[15px] text-[10px] text-light-50 md:tracking-[3.75px] uppercase mt-4">
          Design / digital / experiential
        </p>
      </div>
    </div>
  );
};

export default Pride;
