import React from "react";
import { NavLink, useLocation } from 'react-router-dom';

function Footer() {

    // Scroll to top of window when link clicked
    let location = useLocation();
    React.useEffect(() => {
        window.scrollTo(0,0);
    }, [location]);

    return (
            <div className="container footer-wrapper bg-transparent">
                <footer className="py-0 my-4 bg-transparent">
                    <ul id="footer-ul" className="nav justify-content-center border-bottom pb-3 mb-3 bg-transparent">
                    <li id="footer-li" className="bg-transparent nav-item"><NavLink to="/React-Portfolio/" className={({ isActive }) =>
                isActive ? 'nav-link active bg-transparent' : 'nav-link bg-transparent'}><p className="text-white bg-transparent">Home</p></NavLink></li>
                    <li className="bg-transparent nav-item"><NavLink to="/React-Portfolio/projects" className={({ isActive }) =>
                isActive ? 'nav-link active bg-transparent' : 'nav-link bg-transparent'}><p className="text-white bg-transparent">Projects</p></NavLink></li>
                    <li className="bg-transparent nav-item"><NavLink to="/React-Portfolio/contact" className={({ isActive }) =>
                isActive ? 'nav-link active bg-transparent' : 'nav-link bg-transparent'}><p className="text-white bg-transparent">Contact</p></NavLink></li>
                    </ul>
                    <p className="text-center text-muted bg-transparent">© 2023 Richard Brain</p>
                </footer>
            </div>

    );
  }

  
  export default Footer;