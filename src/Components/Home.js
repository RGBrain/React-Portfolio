import React from "react";

function Home() {
    return (
        <section className="home mt-5 pt-5">
          <div className="home text-white ">
            <div className="container border rounded mb-5" id="about">
              <h1>Portfolio</h1>
              <img className="float-end border rounded" id="portrait" src="/images/portrait-pic5.jpeg" alt="Richard Brain Portrait" height={300}></img>
              <p className="lead">Hi I'm Richard, thanks for checking-out my portfolio.  I'm passionate about web development, and life's too short to not do what you love!  Now with my Front-End Dev & UX certificate in-hand (University of Birmingham), I'm super-excited about my new career!</p>
              <p className="lead">My background is in business development for software companies, as such, I have many transferrable skills and experience (sales, communication, understanding of software landscape etc).</p>
              <p className="lead">I've been messing around with coding for years, I can write 'Hello world!' in anything!  Please take a look at my projects page for some examples of my work, and/or get in touch.</p>
              <p className="lead">Please take a look at my projects page for some examples of my work, and/or get in touch.</p>
            </div>
          </div>
        </section>
    );
  }

  
  export default Home;