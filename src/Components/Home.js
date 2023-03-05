import React from "react";
import { NavLink } from 'react-router-dom';

function Home() {

    return (
        <section className="home mt-5 pt-5">
          <div className="home text-white" id="intro">
            <div className="container border rounded mb-5" id="about">
              <h1 className="mb-4">Portfolio</h1>
              <img className="float-end border rounded" id="portrait" src="https://rgbrain.github.io/React-Portfolio/images/portrait-pic5.jpeg" alt="Richard Brain Portrait" height={300}></img>
              <p className="lead">Hi I'm Richard, thanks for checking-out my portfolio.</p>
              <p className="lead">I'm passionate about web development, and life's too short to not do what you love!  Now with my Front-End Web Development & UI/UX certificate in-hand (University of Birmingham), I'm super-excited to see where this adventure takes me!</p>
              <p className="lead">My background is in business development for software companies.  As such, I have many transferrable skills to take into my new career (sales, marketing, communications, project management etc).  I also have a good understanding of Marketing Technology, having worked with companies such as M&C Saatchi, Acxiom and Push Group.</p>
              <p className="lead">I love coding - Building things in JavaScript is so rewarding, CSS is a delicious puzzle to solve.  Currently I'm enjoying using React, both for this portfolio, and a project called MiiX, which uses Spotify's API to create group listening sessions.</p>
              <p className="lead">Take a look at my projects page to see what I have been working on: </p>
              <div className="home-btn-container container-flex d-flex p-4">
                <NavLink to="/projects" className='home-btn text-white nav-link active bg-transparent nav-router m-3'><button className="btn btn-lg btn-primary homepage-btn glow-on-hover">Projects</button></NavLink><NavLink to="/contact" className='home-btn text-white nav-link active bg-transparent '><button className="btn btn-lg btn-primary homepage-btn m-3 glow-on-hover">Contact</button></NavLink>
              </div>
            </div>
          </div>
        </section>
    );
  }

  
  export default Home;