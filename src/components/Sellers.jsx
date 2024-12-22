import React from "react";
import Button from "./Button";
import { MdOutlineNavigateNext } from "react-icons/md";
const Sellers = () => {
  return (
    <div className="flex flex-col lg:ml-20 lg:mr-20 lg:mt-14 lg:mb-10 mt-3 ml-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p>Proud to be part of </p>
          <h1 className="text-primary-dark-blue font-bold text-2xl ">
            Pet Sellers
          </h1>
        </div>
        <Button style="lg:pl-6 lg:pr-3 font-normal hidden lg:flex ">
          View all Sellers
          <MdOutlineNavigateNext className="w-6 h-6 text-primary-dark-blue ml-2" />
        </Button>
      </div>
      <div className="flex items-center justify-center mt-4 overflow-x-scroll scroll-smooth">
        <img
          src="src/assets/Seller1.png"
          alt="Seller1"
          className="object-cover w-60"
        />
        <img
          src="src/assets/Seller2.png"
          alt="Seller2"
          className="object-cover w-60"
        />
        <img
          src="src/assets/Seller3.png"
          alt="Seller3"
          className="object-cover w-60"
        />
        <img
          src="src/assets/Seller4.png"
          alt="Seller4"
          className="object-cover w-60"
        />
        <img
          src="src/assets/Seller5.png"
          alt="Seller5"
          className="object-cover w-60"
        />
        <img
          src="src/assets/Seller6.png"
          alt="Seller6"
          className="object-cover w-60"
        />
        <img
          src="src/assets/Seller7.png"
          alt="Seller7"
          className="object-cover w-60"
        />
      </div>
    </div>
  );
};

export default Sellers;