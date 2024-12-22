import React from "react";
import { BASE_URL_WEBSITE } from "../config/axiosInstance";
import { FaGift } from "react-icons/fa6";
const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg p-2 shadow-lg w-[305px] flex flex-col items-center justify-center transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer">
      <img
        src={BASE_URL_WEBSITE + product.productImage}
        alt={`${product.productName} product`}
        className="rounded-lg w-72 object-cover"
      />
      <h2 className="text-lg font-bold self-start mt-5">
        {product.productName}
      </h2>
      <div className="flex self-start gap-2 mt-1">
        <p className="text-gray-500">Product:</p>
        <p className="text-gray-600 font-bold">{product.type}</p>
        <p>.</p>
        <p className="text-gray-500">Size:</p>
        <p className="text-gray-600 font-bold">{product.size}</p>
      </div>
      <p className="mt-1 font-bold self-start mb-3">{product.productVND} VND</p>
      <div className="bg-secondary-mon-yellow-40 w-full p-2 rounded-md flex items-center gap-4">
        <FaGift />
        <p className="text-2xl font-bold mt-[-13px]">.</p>
        <p className="font-semibold">{product.highlight}</p>
      </div>
    </div>
  );
};

export default ProductCard;
