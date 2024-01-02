import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const Pride = () => {
  return (
    <Wrapper className="flex flex-col w-full sm:mt-[200px] overflow-hidden">
      <p className="text-yellow-550 text-xl font-bold">JAGERMEISTER</p>
      <p className="text-light-50 text-[50px] md:text-[90px] font-bold sm:tracking-[-4.5px]">
        PrideMeister
      </p>

      <div className="w-full group relative ">
        <img
          src="/assets/main_page/pride.gif"
          alt="pride"
          className="rounded-xl w-full h-full"
        />
        <img
          src="/assets/main_page/pride.gif"
          alt="stupid"
          className="absolute right-20 md:right-40 sm:w-[84px] sm:h-[61px] w-[40px] h-[15px] clip-path-triangle"
        />
        <Link href="/case/2">
          <img
            src="/assets/main_page/hover.png"
            alt="hover"
            className="rounded-xl opacity-10 w-full h-full absolute top-0 flex items-center justify-center group-hover:h-full group-hover:opacity-90 duration-500 group-hover:visible"
          />
          <div className="absolute right-20 md:right-40 sm:w-[84px] sm:h-[61px] w-[40px] h-[15px] clip-path-triangle bg-[#282425] bg-opacity-0 group-hover:bg-opacity-90 duration-500" />
        </Link>
      </div>
      <p className="text-[15px] text-light-50 tracking-[3.75px] uppercase mt-4">
        Design / digital / experiential
      </p>
      <div className="sm:mt-[150px] mt-16 flex items-center justify-center flex-col sm:gap-8 gap-4 py-4 min-h-[200px]">
        <p className="text-light-50 md:text-[70px] lg:text-[100px] text-4xl">
          <span className="font-bold">Stupid</span> enough?
        </p>
        <Link
          href="/portfolio"
          className="bg-yellow-550 rotate-[2deg] inline-block text-xl sm:text-[29px] text-[#231F20] px-4 sm:py-2"
        >
          Boy, we got more
        </Link>
      </div>
    </Wrapper>
  );
};

export default Pride;
