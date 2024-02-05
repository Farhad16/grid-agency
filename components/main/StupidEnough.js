import Link from "next/link";

const StupidEnough = () => {
  return (
    <div className="sm:mt-[100px] mt-10 flex items-center justify-center flex-col py-4 min-h-[200px] sm:px-14 px-8 sm:mb-[200px] mb-24 oveflow-hidden">
      <p className="text-light-50 md:text-[70px] lg:text-[100px] text-[40px]">
        <span className="font-extrabold tracking-[-2px] sm:tracking-[-5px] leading-[87.424%]">
          Stupid
        </span>{" "}
        <span className="font-light tracking-[-2px] sm:tracking-[-5px] leading-[87.424%]">
          enough?
        </span>
      </p>
      <Link
        href="/portfolio"
        className="no-underline hover:no-underline hover:bg-light-50 transition duration-300 ease bg-yellow-550 rotate-[2deg] inline-block text-[18px] sm:text-[29px] text-[#231F20] hover:text-[#231F20] px-4 sm:py-2 font-extrabold tracking-[-1.45px] sm:leading-normal sm:h-[60px]"
      >
        Boy, we got more
      </Link>
    </div>
  );
};

export default StupidEnough;
