import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
      // Need to remove the bg-dark class, which will make navbar transparent, then move the image up.
      <header className="navigation">
        <nav className="navbar navbar-dark navbar-default fixed-top">
          <div className="container-fluid" role="navigation">
            <a className="navbar-brand fs-1" href="#">Richard Brain  |  Web Developer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item fs-3">
                    <NavLink to="/" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                    </li>
                    <li className="nav-item fs-3">
                    <NavLink to="/about" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
                    </li>
                    <li className="nav-item fs-3">
                    <NavLink to="/projects" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
                    </li>
                    
                </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  
  export default Navbar;