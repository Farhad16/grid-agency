import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import TextContainer from "./TextContainer";

const OurApproach = () => {
  return (
    <Wrapper className="flex items-center flex-col justify-center sm:px-[100px] px-14 pt-[100px] sm:pt-0 !font-manrope">
      <div className="mb-[40px] sm:mb-[80px]">Our approach</div>

      <div className="flex flex-col gap-[50px] sm:gap-[80px]">
        <div className="flex flex-col sm:flex-row items-center gap-[50px] sm:gap-[100px]">
          <Image
            src="/assets/content/plan.png"
            alt="plan"
            width={100}
            height={100}
            layout="responsive"
            className="object-contain"
          />
          <TextContainer
            textDirection="text-left"
            weDo="WE PLAN"
            title="Crafting Your Vision"
            firstPara="Get ready for creative planning that turns simple ideas into standout results."
            secondPara="Our straightforward approach ensures a tailored strategy for social media success, from concept to detailed planning."
          />
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center gap-[50px] sm:gap-[100px]">
          <TextContainer
            textDirection="text-right"
            weDo="WE EXECUTE"
            title="Bringing Ideas to Life"
            firstPara="The production phase is where creativity meets technical excellence, resulting in visually stunning content that captivates your audience."
            secondPara="we transform concepts into captivating content that stands out on social media platforms."
          />
          <Image
            src="/assets/content/execute.png"
            alt="plan"
            width={100}
            height={100}
            layout="responsive"
            className="object-contain"
          />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-[50px] sm:gap-[100px]">
          <Image
            src="/assets/content/analyze.png"
            alt="plan"
            width={100}
            height={100}
            layout="responsive"
            className="object-contain"
          />
          <TextContainer
            textDirection="text-left"
            weDo="WE ANALYZE"
            title="Measuring Impact,
          Maximizing Reach"
            firstPara="The journey doesn't end with content creation"
            secondPara="We provide detailed analytics reports, offering insights into engagement, reach,
          and audience behavior."
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default OurApproach;
