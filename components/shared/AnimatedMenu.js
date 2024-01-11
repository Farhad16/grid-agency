import { menuItem } from "@/constance/menu.data";
import { motion } from "framer-motion";
import Link from "next/link";
import { Drawer } from "rsuite";
import "rsuite/dist/rsuite.css";

const AnimatedMenu = ({ open, setOpen }) => {
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
        }}
      >
        <motion.div
          initial={{ opacity: 1, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.1, easing: "easeInOut", delay: 0.25 }}
        >
          <motion.div
            initial={{ opacity: 1, x: "15%" }}
            animate={{ opacity: 1, x: open ? "0%" : "15%" }}
            transition={{ duration: 0.6, easing: "easeInOut", delay: 0.25 }}
            className={`fixed bg-[#231F20] w-full h-screen`}
          ></motion.div>
          <motion.div
            initial={{ opacity: 1, x: "25%" }}
            animate={{ opacity: 1, x: open ? "0%" : "25%" }}
            transition={{ duration: 0.6, easing: "easeInOut", delay: 0.25 }}
            className={`fixed bg-[#E6E0D2] w-full h-screen`}
          ></motion.div>
          <motion.div
            initial={{ opacity: 1, x: "40%" }}
            animate={{ opacity: 1, x: open ? "0%" : "40%" }}
            transition={{ duration: 0.6, easing: "easeInOut", delay: 0.25 }}
            className={`fixed bg-yellow-550 w-full h-screen`}
          ></motion.div>

          <motion.div
            className={`overflow-auto fixed right-0 bg-black sm:w-1/2 w-full h-screen flex flex-col items-start justify-center sm:pl-24 pl-12 gap-4 z-20`}
            initial={{ opacity: 1, x: "50%" }}
            animate={{ opacity: 1, x: open ? "0%" : "50%" }}
            transition={{ duration: 0.6, easing: "easeInOut", delay: 0.25 }}
          >
            <p className="text-[30px] font-extrabold relative text-yellow-550 tracking-[-1.5px]">
              menu
            </p>
            <div className="flex flex-col xl:gap-12 md:gap-10 mt-6">
              {menuItem.map((item) => (
                <Link
                  href={item.route}
                  key={item.name}
                  className="text-light-50 hover:text-light-50 hover:no-underline md:text-[80px] lg:text-[90px] text-[60px] font-extrabold lg:tracking-[-5px] sm:leading-[34px] leading-normal tracking-[-3px]"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col lg:text-3xl text-[30px] font-extrabold relative text-light-50 sm:mt-10 mt-28 leading-[34px] tracking-[-1.5px]">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-light-50 hover:text-light-50 hover:no-underline"
              >
                say hello
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Drawer>
    </>
  );
};

export default AnimatedMenu;
