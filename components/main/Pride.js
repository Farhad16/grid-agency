import Link from "next/link";
import Wrapper from "../shared/Wrapper";

const Pride = () => {
  return (
    <div className="flex flex-col w-full pb-16 z-[9999]">
      <Wrapper className="sm:mt-36 mt-20 flex flex-col mb-4 sm:!px-[100px] !px-14">
        <p className="text-yellow-550 md:text-xl uppercase text-[15px] tracking-[4.5px] font-extrabold">
          JäGERMEISTER
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
            className="sm:rounded-xl w-full h-ful clip-path-triangle"
          />

          <Link
            href="/case/1"
            className="bg-[#000000] bg-opacity-[.8] bg-multiply flex-shrink-0 sm:rounded-xl clip-path-triangle opacity-0 w-full h-full absolute top-0 flex items-center justify-center group-hover:h-full group-hover:opacity-100 duration-500 group-hover:visible"
          >
            <img
              src="/assets/main_page/view.png"
              alt="hover"
              className="group-hover:opacity-100 opacity-0 sm:w-[421px] w-[200px]"
            />
          </Link>
        </div>
      </Wrapper>

      <div className="sm:px-[100px] px-14">
        <p className="md:text-[15px] text-[10px] text-light-50 md:tracking-[3.75px] uppercase">
          Design / digital / experiential
        </p>
      </div>
    </div>
  );
};

export default Pride;
