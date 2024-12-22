import React from "react";
import { BASE_URL_WEBSITE } from "../config/axiosInstance";

const PetCard = ({ pet }) => {
  return (
    <div className="rounded-lg p-2 shadow-lg w-[305px] flex flex-col items-center justify-center transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer">
      <img
        src={BASE_URL_WEBSITE + pet.thumbnail}
        alt={`${pet.gender} dog`}
        className="rounded-lg w-72 object-cover"
      />
      <h2 className="text-lg font-bold self-start mt-5">
        {pet.dogCode + " - " + pet.dogName}
      </h2>
      <div className="flex self-start gap-2 mt-1">
        <p className="text-gray-500">Gene:</p>
        <p className="text-gray-600 font-bold">{pet.gender}</p>
        <p>.</p>
        <p className="text-gray-500">Age:</p>
        <p className="text-gray-600 font-bold">{pet.age} months</p>
      </div>
      <p className="mt-1 font-bold self-start mb-3">{pet.dogVND} VND</p>
    </div>
  );
};

export default PetCard;
