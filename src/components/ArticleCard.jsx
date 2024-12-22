import React from "react";
import { BASE_URL_WEBSITE } from "../config/axiosInstance";

const ArticleCard = ({ articles }) => {
  console.log(articles.articleImage);
  return (
    <div className="rounded-lg p-2 shadow-lg w-[90%] lg:w-[380px] flex flex-col items-center justify-center transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer">
      <img
        src={BASE_URL_WEBSITE + articles.articleImage}
        alt={`${articles.gender} dog`}
        className="rounded-lg object-cover w-[100%]"
      />
      <h2 className="text-lg font-semibold self-start mt-5 text-wrap">
        {articles.title}
      </h2>

      <p className="mt-1 self-start mb-3 text-ellipsis overflow-hidden line-clamp-4">
        {articles.body}
      </p>
    </div>
  );
};

export default ArticleCard;
