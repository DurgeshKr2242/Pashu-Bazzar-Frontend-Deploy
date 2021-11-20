import React from "react";
import Sell from "../components/sell";
import Navbar from "../components/navbar";

const SellPage = () => {
  return (
    <div>
      <Navbar
        styling2="navbarListItemActive"
        styling3="navbarListItemUnactive"
        styling1="navbarListItemUnactive"
      />
      <Sell />
    </div>
  );
};

export default SellPage;
