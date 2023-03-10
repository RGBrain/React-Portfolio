  import React from "react";
  import { NavLink } from 'react-router-dom';
  
  function Navbar() {

      function collapseDiv(e) {
          let element = e.target;
          if (element) {
            document.querySelector('#navbarNav').classList.remove('show')
          }
      }


      return (
  
        <header className="navigation">
          <nav className="navbar navbar-dark navbar-default fixed-top navbar-expand-xl border-botto">
            <div className="container-fluid" role="navigation">
              {/* 'home' link for logo */}
              <a className="navbar-brand fs-1 m-2 mb-0"><NavLink to="/React-Portfolio/" className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'}><span id="title">Brain  |  Web Developer</span></NavLink></a>
  
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon pt-5"></span>
              </button>
              <div className={`collapse navbar-collapse flex-row-reverse`} id="navbarNav">
                  <ul className="navbar-nav pt-2 m-2" onClick={collapseDiv}>
                    {/* ! HOME LINK */}
                      <li className="nav-item fs-3">
                      <NavLink to="/React-Portfolio/" className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                      </li>
                      <li className="nav-item fs-3 ">
                      <NavLink to="/React-Portfolio/projects" className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
                      </li>
                      <li className="nav-item fs-3">
                      <NavLink to="/React-Portfolio/contact" className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
                      </li>                      
                  </ul>
              </div>
            </div>
          </nav>
        </header>
      );
    }
    
    export default Navbar;