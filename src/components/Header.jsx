import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full"
    >
      {/* Overlay Container for Navigation and Actions */}
      <nav className="relative lg:absolute top-0 lg:left-16 inset-x-0 flex flex-col lg:flex-row items-center justify-between p-5 lg:p-8 z-10 ">
        {/* Logo and Navigation Links */}
        <div className="flex items-center gap-8 justify-between lg:justify-normal w-[100%]">
          {/* Animated Menu Icon */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IoMdMenu className="lg:hidden w-10 h-10" />
          </motion.div>

          {/* Animated Logo */}
          <motion.img
            src="src/assets/Monito.png"
            alt="Logo"
            className="lg:w-auto w-[30%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />

          {/* Search Icon for mobile */}
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CiSearch className="lg:hidden w-10 h-10" />
          </motion.div>

          {/* Navigation Links */}
          <motion.ul
            className="hidden lg:flex gap-8 text-primary-dark-blue font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {["Home", "Category", "About", "Contact"].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-primary-dark-blue-light transition"
              >
                <Link
                  to={
                    item == "Home" ? "/" : item == "Category" ? "/category" : ""
                  }
                >
                  {item}
                </Link>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Search Bar and Action Buttons */}
        <motion.div
          className="hidden lg:flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-0 z-10 lg:w-[1000px] h-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="relative w-full lg:w-72">
            <CiSearch className="lg:block absolute left-3 top-2.5 text-gray-500 w-6 h-6" />
            <input
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-dark-blue"
              type="text"
              placeholder="Search something here!"
            />
          </div>
          <button className="bg-primary-dark-blue text-white px-6 py-2 rounded-full hover:bg-primary-dark-blue-light transition">
            Join the community
          </button>
          <button className="text-primary-dark-blue font-semibold">VND</button>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
