import React from "react";
import Hero from './Hero'
import teamProfileGenerator from '../Assets/teamProfileGenerator.png'

function Projects() {
    return (
        <div className="react-wrapper">
            {/* <Hero /> */}
            <div className="container project-card-grid">
                <div className="row gy-4 top-card">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={teamProfileGenerator} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Project Title</h5>
                                <p className="card-text">Here is some information about my wonderful project!</p>
                                <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">React, JS, HTML, CSS, Bootstrap</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={teamProfileGenerator} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Project Title</h5>
                                <p className="card-text">Here is some information about my wonderful project!</p>
                                <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">React, JS, HTML, CSS, Bootstrap</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={teamProfileGenerator} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Project Title</h5>
                                <p className="card-text">Here is some information about my wonderful project!</p>
                                <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">React, JS, HTML, CSS, Bootstrap</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={teamProfileGenerator} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Project Title</h5>
                                <p className="card-text">Here is some information about my wonderful project!</p>
                                <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">React, JS, HTML, CSS, Bootstrap</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={teamProfileGenerator} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Project Title</h5>
                                <p className="card-text">Here is some information about my wonderful project!</p>
                                <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">React, JS, HTML, CSS, Bootstrap</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={teamProfileGenerator} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Project Title</h5>
                                <p className="card-text">Here is some information about my wonderful project!</p>
                                <a href="#" className="btn btn-primary">More Info</a>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">React, JS, HTML, CSS, Bootstrap</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
  }

  
  export default Projects;

// Here is an example card

//   <div className="col-md-4">
//   <div className="card">
//       <img src={teamProfileGenerator} className="card-img-top" alt="..." />
//       <div className="card-body">
//           <h5 className="card-title">Project Title</h5>
//           <p className="card-text">Here is some information about my wonderful project!</p>
//           <a href="#" className="btn btn-primary">More Info</a>
//       </div>
//       <div class="card-footer">
//           <small class="text-muted">React, JS, HTML, CSS, Bootstrap</small>
//       </div>
//   </div>
// </div>