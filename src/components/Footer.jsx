import React from "react";
import Button from "./Button";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#FCEED5] rounded-tl-3xl rounded-tr-3xl lg:pt-20 lg:pl-28 lg:pr-28 lg:pb-10 pl-10 pr-10 pt-10 pb-4 mt-20">
      <div className="bg-primary-dark-blue flex lg:flex-row flex-col justify-between items-center rounded-lg p-6 gap-6">
        <h1 className="text-white text-2xl line-clamp-2 lg:w-[32%]">
          Register now so you don't miss our programs
        </h1>
        <div className="bg-white flex justify-between lg:w-[60%] w-full gap-2 rounded-2xl items-center p-4">
          <input
            type="text"
            placeholder="Enter your Email"
            className="rounded-md border border-gray-600 w-[100%] h-12 pl-6"
          />
          <Button style="bg-primary-dark-blue text-white rounded-md h-12">
            Subscribe Now
          </Button>
        </div>
      </div>
      <div className="flex justify-between lg:flex-row flex-col lg:items-start items-center">
        <ul className="flex gap-14 lg:mt-8 mt-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Category</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <ul className="flex  gap-8 lg:mt-8 mt-4">
          <li>
            <FaFacebook className="w-6 h-6" />
          </li>
          <li>
            <FaTwitter className="w-6 h-6" />
          </li>
          <li>
            <FaInstagram className="w-6 h-6" />
          </li>
          <li>
            <FaYoutube className="w-6 h-6" />
          </li>
        </ul>
      </div>
      <hr className="outline-none border-spacing-0.5 border-gray-300 lg:mt-10 mt-4" />
      <div className="flex lg:flex-row flex-col justify-between lg:mt-10 mt-4 lg:items-end items-center">
        <p className="text-gray-400">@ 2022 Monito. All rights reserved.</p>
        <img src="src/assets/Monito.png" alt="Logo" className="object-cover" />
        <div className="flex gap-4">
          <p className="text-gray-600">Terms of Service</p>
          <p className="text-gray-600">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
