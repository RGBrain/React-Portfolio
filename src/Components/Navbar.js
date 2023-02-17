// import React, { useState } from "react";
// import { NavLink, useLocation } from 'react-router-dom';

// function Navbar() {
  
//   // ! Attempted implementation of useState to collapse the hamburger menu on click.
//   const [expanded, setExpanded] = useState(false);

//       // let location = useLocation();
//       // React.useEffect(() => {
//       //   console.log(`Navbar useEffect called.  Val of collapsedState: ${collapsedState}`)
//       //   setCollapsedState("collapse");
//       //   console.log(`Navbar useEffect called.  Val of collapsedState after reassignment: ${collapsedState}`)
//       // }, [location]);
  
//     return (
//       <header className="navigation">
//         <nav className="navbar navbar-dark navbar-default fixed-top navbar-expand-xl border-botto">
//           <div className="container-fluid" role="navigation">
//             {/* Add 'home' link to logo */}
//             <a className="navbar-brand fs-1 m-2 mb-0"><NavLink to="/" className={({ isActive }) =>
//                 isActive ? 'nav-link active' : 'nav-link'}>Brain  |  Web Developer</NavLink></a>

//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon pt-5"></span>
//             </button>

//             <div className={`${collapsedState} navbar-collapse flex-row-reverse`} id="navbarNav">
//               {/* // TODO: collapse menu on link click */}
//                 {/* <ul className="navbar-nav pt-2 m-2" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show"> */}
//                 <ul className="navbar-nav pt-2 m-2" expanded={expanded}>>
//                     <li className="nav-item fs-3" >
//                         <NavLink data-bs-toggle="collapse" to="/" className={({ isActive }) =>
//                 isActive ? 'nav-link active' : 'nav-link'} data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">Home</NavLink>
//                     </li>
//                     <li className="nav-item fs-3">
//                         <NavLink to="/projects" onClick={() => setCollapsedState("collapse")} className={({ isActive }) =>
//                 isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
//                     </li>
//                     <li className="nav-item fs-3">
//                         <NavLink to="/contact" className={({ isActive }) =>
//                 isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//     );
//   }
  
//   export default Navbar;


  // ! ORIGINAL CODE BELOW

  import React, { useState } from "react";
  import { NavLink, useLocation } from 'react-router-dom';
  
  function Navbar() {
    
      return (
  
        <header className="navigation">
          <nav className="navbar navbar-dark navbar-default fixed-top navbar-expand-xl border-botto">
            <div className="container-fluid" role="navigation">
              {/* Add 'home' link to logo */}
              <a className="navbar-brand fs-1 m-2 mb-0"><NavLink to="/" className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'}>Brain  |  Web Developer</NavLink></a>
  
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon pt-5"></span>
              </button>
              <div className={`collapse navbar-collapse flex-row-reverse`} id="navbarNav">
                  <ul className="navbar-nav pt-2 m-2">
                      <li className="nav-item fs-3" >
                      <NavLink to="/" className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
                      </li>
                      <li className="nav-item fs-3">
                      <NavLink to="/projects" className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
                      </li>
                      <li className="nav-item fs-3">
                      <NavLink to="/contact" className={({ isActive }) =>
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