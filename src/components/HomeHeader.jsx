import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { IoPlayCircleOutline } from "react-icons/io5";
const HomeHeader = () => {
  return (
    <>
      {/* Header Main Content */}
      <motion.div
        className="lg:absolute lg:left-32 top-40 bg-secondary-mon-yellow-40 mt-8 lg:mt-0 lg:bg-transparent rounded-2xl lg:p-0 p-4 z-50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.h1
          className="text-primary-dark-blue text-[40px] lg:text-6xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          One More Friend
        </motion.h1>
        <motion.h2
          className="text-primary-dark-blue text-[28px] lg:text-[45px] font-bold mt-0 lg:mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Thousands More Fun!
        </motion.h2>
        <motion.p
          className="w-[100%] lg:w-[40%] mt-3 lg:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex items-center w-[40%] mt-10 gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Button>
            View Intro
            <IoPlayCircleOutline className="w-6 h-6 text-primary-dark-blue ml-2" />
          </Button>
          <Button style="bg-primary-dark-blue text-white">Explore Now</Button>
        </motion.div>
      </motion.div>

      {/* Banner Image */}
      <img
        src="src/assets/Banners.png"
        alt="Banner"
        className="hidden lg:block w-full relative overflow-hidden h-auto"
      />
    </>
  );
};

export default HomeHeader;
