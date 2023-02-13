import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import data from '../Assets/projectData.json';

class Projects extends Component {
  state = {
    data
  };

  render() {
    console.log(this.state.data, "hello world")
    return (
      <div className="container project-card-grid">
        <div className="row gy-4">
        {this.state.data.map(project => (
          <ProjectCard
            image={project.image}
            title={project.title}
            gitHub={project.gitHub}
            tech={project.tech}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Projects;

