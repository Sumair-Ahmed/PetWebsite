import React from "react";

const Button = ({ children, style }) => {
  return (
    <button
      className={`flex items-center rounded-full border border-primary-dark-blue 
            p-2 pl-7 pr-5 lg:p-3 lg:pr-8 lg:pl-10 text-primary-dark-blue font-bold text-nowrap ${style}`}
    >
      {children}
    </button>
  );
};

export default Button;
