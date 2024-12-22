import React, { useEffect, useState } from "react";
import Button from "./Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import { fetchArticles } from "../services/articleService";
import ArticleCard from "./ArticleCard";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
        console.log(data);
      } catch (error) {
        setError("Failed to fetch Articles data.");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) {
    return <p>Loading dogs...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-col lg:ml-20 lg:mr-20 lg:mt-14 lg:mb-10 mt-3 ml-7">
      <div className="flex items-center justify-between">
        <div>
          <p>You already know?</p>
          <h1 className="text-primary-dark-blue font-bold text-2xl ">
            Useful Pet Knowledge
          </h1>
        </div>
        <Button style="lg:pl-6 lg:pr-6 font-normal hidden lg:flex ">
          View More
          <MdOutlineNavigateNext className="w-6 h-6 text-primary-dark-blue ml-2" />
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8 w-full">
        {articles.map((article) => (
          <ArticleCard key={article._id} articles={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
