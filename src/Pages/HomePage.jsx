import React from "react";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Banner1 from "../components/Banner1";
import NewPets from "../components/NewPets";
import Products from "../components/Products";
import Sellers from "../components/Sellers";
import HomeHeader from "../components/HomeHeader";
const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <NewPets />
      <Banner />
      <Products />
      <Sellers />
      <Banner1 />
      <Articles />
    </>
  );
};

export default HomePage;
