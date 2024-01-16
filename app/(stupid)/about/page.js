import Achieve from "@/components/about/Achieve";
import Mesh from "@/components/about/Mesh";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import Footer from "@/components/shared/Footer";
import Wrapper from "@/components/shared/Wrapper";

const Page = () => {
  return (
    <div className="bg-[#0A0808] pt-[150px] sm:pt-[200px] min-h-screen">
      <div className="flex flex-col relative">
        <Wrapper className="relative sm:!px-[100px] !px-10">
          <div className="flex flex-col relative gap-2">
            <div className="flex flex-row items-center">
              <p className="capitalize text-[46px] md:text-[70px] lg:text-[80px] xl:text-[100px] text-light-50 tracking-[-2.324px] leading-[68.983%] font-extrabold">
                our
              </p>
              <img
                layout="responsive"
                alt="stupid"
                src="/assets/about/stupid.png"
                className="lg:w-[200px] md:w-[180px] w-[119px] md:h-[80px] rotate-[-6.2deg]"
              />
            </div>
            <div className="relative">
              <p className="text-[46px] md:text-[70px] lg:text-[80px] xl:text-[100px] text-light-50 tracking-[-2.324px] leading-[68.983%] font-extrabold">
                <span>capabilities</span>
              </p>
              <img
                layout="responsive"
                alt="stupid-1"
                src="/assets/about/scribble.png"
                className="absolute -top-[25%]"
              />
            </div>
          </div>
        </Wrapper>

        <Vision />
        <Mission />
        <Mesh />

        <div className="lg:text-[54px] md:text-[45px] text-xl text-light-50 font-medium sm:tracking-[-2.7px] tracking-[-0.837px] flex items-center flex-col lg:pt-16 md:pt-12 pt-0 lg:mb-[-50px] md:mb-[-30px] leading-normal">
          <p>We believe that within</p>
          <div className="flex items-center md:mt-[-10px]">
            <span>these seemingly </span>
            <img
              layout="responsive"
              alt="stupid"
              src="/assets/about/stupid.png"
              className="lg:w-[300px] md:w-[230px] w-[115px] rotate-[-8deg]"
            />
            <p> ideas,</p>
          </div>
        </div>
      </div>
      <Achieve />
      <Footer />
    </div>
  );
};

export default Page;
