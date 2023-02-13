import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import data from '../Assets/projectData.json';

class Projects extends Component {
  state = {
    data
  };
  
  render() {
    return (
      <div>
        {this.state.data.map(project => (
          <ProjectCard
            image={project.image}
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

