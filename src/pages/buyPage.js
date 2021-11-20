import React from "react";
import Buy from "../components/buy";
import Navbar from "../components/navbar";

const BuyPage = () => {
  return (
    <div>
      <Navbar
        styling3="navbarListItemActive"
        styling2="navbarListItemUnactive"
        styling1="navbarListItemUnactive"
      />
      <Buy />
    </div>
  );
};

export default BuyPage;
