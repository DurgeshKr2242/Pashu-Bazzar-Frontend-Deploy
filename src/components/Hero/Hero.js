import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div class="hero-image">
        <div class="hero-text">
          <h1>Pashu Bazar</h1>
          <p>Buy your heart out</p>
          <div className="btnContainer">
            <button class="btn-default">Buy</button>
            <button class="btn-default">Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
