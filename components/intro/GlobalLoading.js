/** @jsxImportSource @emotion/react */
import Image from "next/image";

const GlobalLoading = () => {
  return (
    <>
      <div className="relative min-h-screen xl:flex hidden items-center justify-center w-full">
        <Image
          src="/assets/intro/loading-g.gif"
          alt="in"
          layout="responsive"
          width={100}
          height={100}
          className="min-h-screen cover"
        />
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center gap-24">
          <img
            src="/assets/intro/stupid.png"
            className="w-[412px] h-[127px]"
            alt="stupid"
          />
        </div>
      </div>

      <div className="relative min-h-screen hidden md:flex xl:hidden items-center justify-center w-full">
        <Image
          src="/assets/intro/crop.gif"
          alt="in"
          layout="responsive"
          width={100}
          height={100}
          className="min-h-screen cover"
        />
        <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center gap-24">
          <img
            src="/assets/intro/stupid.png"
            className="w-[450px] h-[160px]"
            alt="stupid"
          />
        </div>
      </div>

      <div className="relative w-full md:hidden block">
        <Image
          src="/assets/intro/intro-g.gif"
          alt="Loading"
          layout="responsive"
          width={100}
          height={100}
          className="min-h-screen"
        />
        <>
          <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center">
            <img src="/assets/intro/stupid.png" alt="stupid" />
          </div>
        </>
      </div>
    </>
  );
};

export default GlobalLoading;
