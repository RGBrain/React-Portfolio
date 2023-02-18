import React from "react";

function Home() {
    return (
        <section className="home mt-5 pt-5">
          <div className="home text-white ">
            <div className="container border rounded mb-5" id="about">
              <h1 className="mb-4">Portfolio</h1>
              <img className="float-end border rounded" id="portrait" src="/images/portrait-pic5.jpeg" alt="Richard Brain Portrait" height={300}></img>
              <p className="lead">Hi I'm Richard, thanks for checking-out my portfolio.</p>
              <p className="lead">I'm passionate about web development, and life's too short to not do what you love!  Now with my Front-End Web Development & UI/UX certificate in-hand (University of Birmingham), I'm super-excited to see where this adventure takes me!</p>
              <p className="lead">My background is business development for software companies.  As such, I have many transferrable skills to take into my new career (sales, marketing, communications, project management etc).  I also have a good understanding of Marketing Technology, having worked with companies such as M&C Saatchi, Acxiom and Push Group.</p>
              <p className="lead">I love coding - Building things in JavaScript is so rewarding, CSS is a delicious puzzle to solve.  Currently I'm enjoying working with React for this portfolio, and a project using Spotify's API to create group listening sessions (see MiiX in projects).</p>
              <p className="lead">Speaking of projects... please take a look at my projects page for some examples of my work, and get in touch!</p>
            </div>
          </div>
        </section>
    );
  }

  
  export default Home;