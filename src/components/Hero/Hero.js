import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Pashu Bazar</h1>
          <p>Buy your heart out</p>
          <div className="btnContainer">
            <button className="btn-default">Buy</button>
            <button className="btn-default">Sell</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
