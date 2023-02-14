import React from "react";
import { Link, NavLink } from 'react-router-dom';

function Footer() {
    return (
            <div className="container footer-wrapper bg-transparent">
                <footer className="py-0 my-4 bg-transparent">
                    <ul id="footer-ul" className="nav justify-content-center border-bottom pb-3 mb-3 bg-transparent">
                    <li id="footer-li" className="nav-item text-muted bg-transparent"><NavLink to="/" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}><p className="text-white">Home</p></NavLink></li>
                    <li className="nav-item bg-transparent"><NavLink to="/projects" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}><p className="text-white bg-transparent">Projects</p></NavLink></li>
                    <li className="nav-item bg-transparent"><NavLink to="/contact" className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'}><p className="text-white">Contact</p></NavLink></li>
                    </ul>
                    <p className="text-center text-muted bg-transparent">© 2023 Richard Brain</p>
                </footer>
            </div>

    );
  }

  
  export default Footer;