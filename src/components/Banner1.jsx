import React from "react";
import Button from "./Button";
import { IoPlayCircleOutline } from "react-icons/io5";
import { assets } from "../assets/assets";
const Banner1 = () => {
  return (
    <>
      <div className="relative ml-20 mr-20 overflow-hidden mb-10">
        <img
          src={assets.BannerDown1}
          alt="BannerDown1"
          className="hidden lg:block overflow-hidden object-cover w-full h-[378px] rounded-2xl"
        />
        <img
          src={assets.BannerImage1}
          alt="BannerImage1"
          className="hidden lg:block absolute right-0 bottom-0"
        />

        <div className="relatvie lg:absolute  left-20 top-10 bg-secondary-mon-yellow-40 mt-8 lg:mt-0 lg:bg-transparent rounded-2xl lg:p-0 p-4 w-full">
          <h1 className="text-primary-dark-blue text-[40px] lg:text-5xl font-bold flex gap-5 items-center">
            Adoption
            <img src={assets.Feet} alt="Feet" />
          </h1>
          <h2 className="text-primary-dark-blue text-[28px] lg:text-[30px] font-bold mt-0 lg:mt-3">
            We Need Help. So Do They.
          </h2>
          <p className="w-[100%] lg:w-[17%] mt-3 lg:mt-6 lg:absolute lg:left-0">
            Adopt a pet and give it a home. it will be love you back
            unconditionaly.
          </p>
          <div className="flex items-end lg:justify-start w-[40%] lg:mt-32 mt-10 gap-5 lg:absolute lg:left-0 ">
            <Button style="bg-primary-dark-blue text-white">Explore Now</Button>
            <Button>
              View Intro
              <IoPlayCircleOutline className="w-6 h-6 text-primary-dark-blue ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner1;
