import { menuItem } from "@/constance/menu.data";
import Link from "next/link";
import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedMenu = ({ open, setOpen }) => {
  const menuAnimation1 = useSpring({
    transform: open ? "translateX(0%)" : "translateX(50%)",
    opacity: open ? 1 : 0,
    config: {
      tension: 500,
      friction: 200,
    },
  });

  const menuAnimation2 = useSpring({
    transform: open ? "translateX(0%)" : "translateX(90%)",
    opacity: open ? 1 : 0,
    config: {
      tension: 600,
      friction: 200,
    },
  });

  const menuAnimation3 = useSpring({
    transform: open ? "translateX(0%)" : "translateX(150%)",
    opacity: open ? 1 : 0,
    config: {
      tension: 700,
      friction: 200,
    },
  });

  const menuAnimation4 = useSpring({
    transform: open ? "translateX(0%)" : "translateX(150%)",
    opacity: open ? 1 : 0,
    config: {
      tension: 800,
      friction: 200,
    },
  });

  const menuAnimation5 = useSpring({
    transform: open ? "translateX(0%)" : "translateX(100%)",
    opacity: open ? 1 : 0,
    config: {
      tension: 900,
      friction: 200,
    },
  });

  return (
    <>
      <animated.div
        className={`fixed sm:top-[12%] top-[8%] bg-[#2B2B2B] w-1/3 h-screen z-20`}
        style={{ ...menuAnimation1 }}
      ></animated.div>
      <animated.div
        className={`fixed sm:top-[12%] top-[8%] bg-[#231F20] w-1/3 h-screen z-20`}
        style={{ ...menuAnimation2 }}
      ></animated.div>
      <animated.div
        className={`fixed sm:top-[12%] top-[8%] bg-[#E6E0D2] w-1/3 h-screen z-20`}
        style={{ ...menuAnimation3 }}
      ></animated.div>

      <animated.div
        className={`fixed sm:top-[12%] top-[8%] left-0 bg-yellow-550 sm:w-1/2 w-1/3 h-screen z-20`}
        style={{ ...menuAnimation4 }}
      ></animated.div>
      <animated.div
        className={`overflow-auto fixed sm:top-[12%] top-[8%] right-0 bg-black sm:w-1/2 w-full h-screen flex flex-col items-start justify-center sm:pl-24 pl-12 gap-4 z-20`}
        style={{ ...menuAnimation5 }}
      >
        <p className="text-[30px] font-extrabold relative text-yellow-550 tracking-[-1.5px]">
          menu
        </p>
        <div className="flex flex-col xl:gap-12 md:gap-10 mt-6">
          {menuItem.map((item) => (
            <Link
              href={item.route}
              key={item.name}
              className="text-light-50 md:text-[80px] lg:text-[90px] text-[60px] font-extrabold lg:tracking-[-5px] sm:leading-[34px] leading-normal tracking-[-3px]"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col lg:text-3xl text-[30px] font-extrabold relative text-light-50 sm:mt-10 mt-28 leading-[34px] tracking-[-1.5px]">
          <Link href="/contact" onClick={() => setOpen(false)}>
            contact us
          </Link>
          <Link href="/" onClick={() => setOpen(false)}>
            Back to INTRO
          </Link>
        </div>
      </animated.div>
    </>
  );
};

export default AnimatedMenu;
