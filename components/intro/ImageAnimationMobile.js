"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ImageAnimationMobile({ setFirstLoad }) {
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
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const [firstClick, setFirstClick] = useState(true);

  const refs = sections.reduce((acc, _, i) => {
    acc[`section${i}`] = useRef(null);
    return acc;
  }, {});

  const handleClick = () => {
    if (currentSection === 5) {
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

  useEffect(() => {
    if (currentSection === sections.length) {
      localStorage.setItem("firstLoad", "yes");
    }
  }, [currentSection]);

  return (
    <div className="relative pt-[200px] flex items-center justify-center flex-col overflow-hidden">
      {currentSection !== 2 && (
        <div
          onClick={handleClick}
          className="cursor-pointer z-[100] fixed sm:bottom-0 bottom-5 left-[50%] -translate-x-1/2 -translate-y-1/2 transform flex flex-col items-center"
        >
          <img src="/assets/intro/skip.svg" alt="arrow" />
        </div>
      )}

      {sections.map((section, i) => (
        <div
          key={i}
          ref={refs[`section${i}`]}
          className="h-screen flex items-center justify-center"
        >
          {section.el}
        </div>
      ))}
    </div>
  );
}
