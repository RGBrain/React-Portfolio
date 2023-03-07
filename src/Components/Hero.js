import React from "react";
import retroBanner from '../Assets/retroBanner.mp4'
import retroBannerImg from '../Assets/retroBannerMob.png'

function Hero() {
    return (
          <div className="hero-wrapper">
            {/* Video background for larger screens */}
            <div className="main-hero" id="video-background">
              <video src={retroBanner} autoPlay loop muted playsInline/>
            </div>
            {/* Image background for mobiles */}
            <div className="main-hero" >
              <img src={retroBannerImg} id="image-background" alt="Futuristic background"/>
            </div>
          </div>
    );
  }

  
  export default Hero;