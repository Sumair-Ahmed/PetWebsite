import React from "react";
import Button from "./Button";
import { IoPlayCircleOutline } from "react-icons/io5";
const Banner = () => {
  return (
    <>
      <div className="relative ml-20 mr-20 overflow-hidden mb-10">
        <img
          src="src/assets/BannerDown.png"
          alt="BannerDown"
          className="hidden lg:block overflow-hidden object-cover w-full"
        />
        <img
          src="src/assets/BannerImage.png"
          alt="BannerImage"
          className="hidden lg:block absolute left-0 bottom-0"
        />

        <div className="relatvie lg:absolute  right-20 top-10 bg-secondary-mon-yellow-40 mt-8 lg:mt-0 lg:bg-transparent rounded-2xl lg:p-0 p-4 text-end w-full">
          <h1 className="text-primary-dark-blue text-[40px] lg:text-5xl font-bold">
            One More Freind
          </h1>
          <h2 className="text-primary-dark-blue text-[28px] lg:text-[30px] font-bold mt-0 lg:mt-3">
            Thousands More Fun!
          </h2>
          <p className="w-[100%] lg:w-[40%] mt-3 lg:mt-6 lg:absolute lg:right-0">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex items-end lg:justify-end w-[40%] lg:mt-32 mt-10 gap-5 lg:absolute lg:right-0 ">
            <Button>
              View Intro
              <IoPlayCircleOutline className="w-6 h-6 text-primary-dark-blue ml-2" />
            </Button>
            <Button style="bg-primary-dark-blue text-white">Explore Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
