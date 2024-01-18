import { menuItem } from "@/constance/menu.data";
import { motion } from "framer-motion";
import Link from "next/link";
import { Drawer } from "rsuite";
import "rsuite/dist/rsuite.css";

const AnimatedMenu = ({ open, setOpen }) => {
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };
  return (
    <>
      <Drawer
        size="full"
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        style={{
          top: "12%",
          height: "88%",
          zIndex: "999",
          background: "transparent !important",
        }}
      >
        <motion.div
          initial={{ opacity: 1, x: "15%" }}
          animate={{ opacity: 1, x: open ? "0%" : "15%" }}
          transition={{ duration: 0.3, easing: "easeInOut", delay: 0.25 }}
          className={`fixed bg-[#231F20] w-1/4 h-screen`}
        ></motion.div>
        <motion.div
          initial={{ opacity: 1, x: "30%" }}
          animate={{ opacity: 1, x: open ? "0%" : "30%" }}
          transition={{ duration: 0.3, easing: "easeInOut", delay: 0.25 }}
          className={`fixed bg-[#E6E0D2] w-1/4 h-screen`}
        ></motion.div>
        <motion.div
          initial={{ opacity: 1, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, easing: "easeInOut", delay: 0.25 }}
        >
          <motion.div className="flex">
            <motion.div
              initial={{ opacity: 1, x: "100%" }}
              animate={{ opacity: 1, x: open ? "0%" : "100%" }}
              transition={{ duration: 0.4, easing: "easeInOut", delay: 0.25 }}
              className={`fixed  w-1/2 h-screen bg-yellow-550`}
            ></motion.div>

            <motion.div
              className={`overflow-auto fixed right-0 !bg-black sm:w-1/2 w-full h-screen flex flex-col items-start justify-center sm:pl-24 pl-12 gap-4 z-100`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  opacity: 0,
                  x: "100%",
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: "100%",
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  },
                }}
                className="text-[30px] font-extrabold relative text-yellow-550 tracking-[-1.5px] !font-manrope"
              >
                menu
              </motion.div>

              <motion.div className="flex flex-col xl:gap-16 md:gap-12 mt-6">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: "100%",
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      },
                    },
                  }}
                  className="bouncing-text"
                >
                  <Link
                    href="/about"
                    className="text-light-50 hover:text-light-50 hover:no-underline md:text-[80px] lg:text-[90px] text-[60px] font-extrabold lg:tracking-[-5px] sm:leading-[34px] leading-normal tracking-[-3px] !font-manrope"
                    onClick={() => setOpen(false)}
                  >
                    about us
                  </Link>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: "100%",
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 90,
                        damping: 15,
                      },
                    },
                  }}
                  className="bouncing-text"
                >
                  <Link
                    href="/portfolio"
                    className="text-light-50 hover:text-light-50 hover:no-underline md:text-[80px] lg:text-[90px] text-[60px] font-extrabold lg:tracking-[-5px] sm:leading-[34px] leading-normal tracking-[-3px] !font-manrope"
                    onClick={() => setOpen(false)}
                  >
                    our works
                  </Link>
                </motion.div>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: "100%",
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 80,
                        damping: 15,
                      },
                    },
                  }}
                  className="bouncing-text"
                >
                  <Link
                    href="/blogs"
                    className="text-light-50 hover:text-light-50 hover:no-underline md:text-[80px] lg:text-[90px] text-[60px] font-extrabold lg:tracking-[-5px] sm:leading-[34px] leading-normal tracking-[-3px] !font-manrope"
                    onClick={() => setOpen(false)}
                  >
                    talks
                  </Link>
                </motion.div>
              </motion.div>
              <div className="flex flex-col lg:text-3xl text-[30px] font-extrabold relative text-light-50 sm:mt-16 mt-28 leading-[34px] tracking-[-1.5px]">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: "100%",
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 10,
                      },
                    },
                  }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="text-light-50 hover:text-light-50 hover:no-underline !font-manrope"
                  >
                    say hello
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Drawer>
    </>
  );
};

export default AnimatedMenu;
