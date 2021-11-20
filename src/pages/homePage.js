import React from "react";
import Faq from "../components/faq";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Review from "../components/review";

const HomePage = () => {
  return (
    <div>
      <Navbar
        styling1="navbarListItemActive"
        styling2="navbarListItemUnactive"
        styling3="navbarListItemUnactive"
      />
      <Review />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
