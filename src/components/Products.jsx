import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/productServices";
import Button from "./Button";
import { MdOutlineNavigateNext } from "react-icons/md";
import ProductCard from "./ProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        setError("Failed to fetch Products data.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
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
          <p>Hard to choose right products for your pets?</p>
          <h1 className="text-primary-dark-blue font-bold text-2xl ">
            Our Products
          </h1>
        </div>
        <Button style="lg:pl-6 lg:pr-6 font-normal hidden lg:flex ">
          View More
          <MdOutlineNavigateNext className="w-6 h-6 text-primary-dark-blue ml-2" />
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-8 w-full">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
