import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Footer() {
    return (
            <div class="container footer-wrapper">
                <footer className="py-0 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item text-muted"><NavLink to="/" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}><p className="text-white">Home</p></NavLink></li>
                    <li className="nav-item"><NavLink to="/projects" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}><p className="text-white">Projects</p></NavLink></li>
                    <li className="nav-item"><NavLink to="/contact" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}><p className="text-white">Contact</p></NavLink></li>
                    </ul>
                    <p className="text-center text-muted">© 2023 Richard Brain</p>
                </footer>
            </div>

    );
  }

  
  export default Footer;