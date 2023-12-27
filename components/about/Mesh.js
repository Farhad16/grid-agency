import React from "react";
import Circle from "../shared/Circle";

const Mesh = () => {
  return (
    <div className="relative flex items-center justify-center w-full pb-[150px] pt-16">
      <img
        src="/assets/about/aline.png"
        alt="aline"
        className="sm:w-[800px] sm:h-[700px] w-[500px] h-[450px]"
      />
      <div className="flex flex-col absolute top-[5%] left-[30%]">
        <p className="lg:text-[54px] md:text-[40px] text-[30px] text-light-50 font-extralight tracking-[-2.7px]">
          Mesh
        </p>
        <p className="text-yellow-550 font-semibold text-base sm:text-lg lg:text-[26px] tracking-[5.4px]">
          OUR PROCESS
        </p>
      </div>
      <Circle className="lg:-top-[5%] top-0 lg:right-[15%] md:right-[5%] right-0">
        Curiosity & Explorationt
      </Circle>
      <Circle className="left-[45%]">Driven Creative</Circle>
      <Circle className="lg:left-[5%] -left-[8%] lg:top-[20%] top-[28%]">
        Innovative Concept Development
      </Circle>
      <Circle className="lg:right-[5%] md:right-0 -right-[10%] bottom-[32%]">
        Transformation
      </Circle>
      <Circle className="lg:bottom-0 bottom-20 lg:left-[30%] left-[20%]">
        Technology Consideration
      </Circle>
    </div>
  );
};

export default Mesh;
