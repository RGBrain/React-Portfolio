import React from "react";
function Navbar() {
    return (
      // Need to remove the bg-dark class, which will make navbar transparent, then move the image up.
      <header className="navigation">
        <nav className="navbar navbar-dark navbar-default fixed-top">
          <div className="container-fluid " role="navigation">
            <a className="navbar-brand" href="#">Richard Brain  |  Web Developer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Navbar;