import React from "react";

const TextContainer = ({
  textDirection,
  weDo,
  title,
  firstPara,
  secondPara,
}) => {
  return (
    <div className={`flex flex-col ${textDirection}`}>
      <p
        className={`text-yellow-550 font-semibold text-xl uppercase tracking-[4px]`}
      >
        {weDo}
      </p>
      <h2 className="text-3xl font-extrabold">{title}</h2>
      <p className="text-sm sm:text-base md:text-[18px] lg:text-[26px] 5xl:text-[32px] mt-6 pt-2 sm:tracking-[-1.3px] tracking-[-0.609px] sm:leading-normal leading-[20px]">
        {firstPara}
      </p>
      <p className="text-sm sm:text-base md:text-[18px] lg:text-[26px] 5xl:text-[32px] mt-2 md:mt-4 sm:tracking-[-1.3px] tracking-[-0.609px] sm:leading-normal leading-[20px]">
        {secondPara}
      </p>
    </div>
  );
};

export default TextContainer;
