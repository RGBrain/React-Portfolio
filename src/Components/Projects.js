// import React from "react";
// import ProjectCard from '../Components/ProjectCard';
// import projectData from '../Assets/projectData.json';
// import React, { Component } from 'react';


// class Projects extends Component {
//     state = { 
//         projectData
//      };
//     render() { 
//         return (
//             <div className="react-wrapper">
//             {this.state.project.map(project => (
//           <ProjectCard
//           image={project.image}
//           title={project.title}
//           gitHub={project.gitHub}
//           tech={project.tech}
//         />
//             ))}
//             </div>
//         );
//     }
// }
 
// export default Projects;


import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
// import data from '..Assets/projectData.json';
import data from '/Users/richardbrain/Dropbox/bootcamp/13-react-module/React-Portfolio/src/Assets/projectData.json';

class Projects extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    data
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        {this.state.data.map(project => (
          <ProjectCard
            screenshot={project.screenshot}
            title={project.title}
            gitHub={project.gitHub}
            tech={project.tech}
          />
        ))}
      </div>
    );
  }
}

export default Projects;

