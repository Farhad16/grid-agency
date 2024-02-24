import Link from "next/link";
import { useEffect, useState } from "react";
import VerticleEl from "../shared/VerticleEl";
import Wrapper from "../shared/Wrapper";

const SelectedWork = () => {
  const [selectedCase, setselectedCase] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured/casestudies`
        );
        const data = await res.json();
        setselectedCase(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!loading && !selectedCase) {
    return;
  }

  return (
    <div className="flex flex-col w-full sm:mt-[200px] sm:pt-16">
      <div className="flex flex-col relative sm:px-[100px] px-14 mb-20 sm:mb-36">
        <div className="flex gap-6">
          <img
            src="/assets/main_page/stupid.png"
            alt="stupid"
            className="md:w-[325px] md:h-[174px] w-[200px] h-[100px] z-10"
          />
          <img
            src="/assets/main_page/Sparkle.gif"
            alt="stupid"
            className="sm:w-[130px] sm:h-[130px] w-[70px] h-[70px]"
          />
        </div>
        <p className="z-0 uppercase text-[30px] md:text-[53px] text-light-50 sm:tracking-[10.5px] tracking-[6px] absolute top-[70%] font-extrabold leading-[107.231%]">
          SELECTED <br /> WORK
        </p>
      </div>
      <Wrapper className="flex items-end justify-end relative sm:!px-[100px] !px-14">
        <VerticleEl className="sm:right-0 sm:top-14 sm:block hidden">
          OUR WORK
        </VerticleEl>
      </Wrapper>
      {selectedCase?.featured?.map((port) => (
        <div key={port.slug} className="flex flex-col w-full pb-16">
          <Wrapper className="flex flex-col mb-8 sm:!px-[100px] !px-14 pt-20">
            <p className="text-yellow-550 md:text-xl uppercase text-[15px] tracking-[4.5px] font-extrabold">
              {port.port_client}
            </p>
            <p className="text-light-50 text-[30px] md:text-[40px] lg:text-[90px] font-extrabold lg:tracking-[-4.5px] tracking-[-1.5px] leading-[80%]">
              {port.case_title}
            </p>
          </Wrapper>

          <Wrapper className="sm:!px-[100px] !px-0">
            <div className="w-full group relative">
              <img
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${port.featured_video}`}
                alt="dish"
                className="sm:rounded-xl w-full clip-path-triangle-mobile sm:clip-path-triangle h-[350px] md:h-[550px] lg:h-[650px]  object-cover"
              />

              <Link
                href={`/case/${port.slug}`}
                className="bg-[#000000] bg-opacity-[.8] no-underline hover:no-underline hover:bg-black hover:bg-opacity-[.8] bg-multiply flex-shrink-0 sm:rounded-xl clip-path-triangle-mobile sm:clip-path-triangle opacity-0 w-full h-full absolute top-0 flex items-center justify-center group-hover:h-full group-hover:opacity-100 duration-500 group-hover:visible"
              >
                <img
                  src="/assets/main_page/view.png"
                  alt="hover"
                  className="group-hover:opacity-100 opacity-0 sm:w-[421px] w-[200px]"
                />
              </Link>
            </div>
          </Wrapper>
          <div className="sm:px-[100px] px-14 mb-10">
            <p className="md:text-[15px] text-[10px] text-light-50 md:tracking-[3.75px] uppercase">
              {port.services.map((service, i) => (
                <span key={service.id}>
                  <span>{service}</span>
                  {i !== port.services?.length - 1 && " / "}
                </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectedWork;
