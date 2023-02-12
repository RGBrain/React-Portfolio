import React from "react";
import retroBanner from '../Assets/retroBanner.mp4'

function Hero() {
    return (
          <div className="hero-wrapper">
          <div className="main-hero">
            <video src={retroBanner} autoPlay loop muted />
          </div>
          </div>
    );
  }

  
  export default Hero;