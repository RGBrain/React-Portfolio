import React from "react";
import retroBanner from '../Assets/retroBanner.mp4'

function Hero() {
    return (
          <div className="">
          <div className="main-hero">
            <video src={retroBanner} autoPlay loop muted />
          </div>
          <div className="main-heading">
            <h1 style={{fontSize:"80px"}}>Richard Brain - Web Developer</h1>
          </div>
          </div>
    );
  }

  
  export default Hero;