"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ImageAnimationMobile({ step }) {
  const sections = [
    {
      el: (
        <motion.img
          src={`/assets/intro/text1.png`}
          alt="text1"
          id="img1"
          initial={{ scale: 0.1, y: -100 }}
          whileInView={{ scale: 0.9, y: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
        />
      ),
    },
    {
      el: (
        <motion.img
          src={`/assets/intro/text2.png`}
          alt="text2"
          id="img1"
          initial={{ scale: 0.1, y: -100 }}
          whileInView={{ scale: 0.9, y: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
        />
      ),
    },
    {
      el: (
        <motion.img
          src={`/assets/intro/text3.png`}
          alt="text3"
          id="img1"
          initial={{ scale: 0.1, y: -100 }}
          whileInView={{ scale: 0.9, y: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
        />
      ),
    },
    {
      el: (
        <motion.img
          src={`/assets/intro/text4.png`}
          alt="text4"
          id="img1"
          initial={{ scale: 0.1, y: -100 }}
          whileInView={{ scale: 0.9, y: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
        />
      ),
    },
    {
      el: (
        <motion.img
          src={`/assets/intro/text5.png`}
          alt="text5"
          id="img1"
          initial={{ scale: 0.1, y: -100 }}
          whileInView={{ scale: 0.9, y: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
        />
      ),
    },
    {
      el: (
        <motion.img
          src={`/assets/intro/text6.png`}
          alt="text6"
          id="img1"
          initial={{ scale: 0.1, y: -100 }}
          whileInView={{ scale: 0.9, y: 0 }}
          transition={{ duration: 0.7, easing: "easeOut", delay: 0.25 }}
        />
      ),
    },
  ];

  if (step > 3) {
    return null;
  }
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(0);
  const [firstClick, setFirstClick] = useState(true);

  const refs = sections.reduce((acc, _, i) => {
    acc[`section${i}`] = useRef(null);
    return acc;
  }, {});

  const handleClick = () => {
    if (currentSection === 5) {
      router.push("/home", { scroll: true });
      document.body.style.overflow = "visible";
      return;
    }
    if (firstClick) {
      const sectionRef = refs[`section${currentSection}`];
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(0);
      setFirstClick(false);
    } else {
      const nextSection =
        currentSection < sections.length - 1 ? currentSection + 1 : 0;
      setCurrentSection(nextSection);
      const sectionRef = refs[`section${nextSection}`];
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative pt-[200px]">
      <div
        onClick={handleClick}
        className="cursor-pointer z-[100] fixed sm:bottom-0 bottom-5 left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center"
      >
        <img src="/assets/intro/skip.svg" alt="arrow" />
      </div>

      {sections.map((section, i) => (
        <div
          key={i}
          ref={refs[`section${i}`]}
          className="min-h-screen flex items-center justify-center"
        >
          {section.el}
        </div>
      ))}
    </div>
  );
}
