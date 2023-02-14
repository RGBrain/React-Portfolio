import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import data from '../Assets/projectData.json';

class Projects extends Component {
  state = {
    data
  };

  render() {
    return (
      <div className="container project-card-grid">
        <div className="row gy-4">
        {this.state.data.map(project => (
          <ProjectCard
            info={project.info}
            image={project.image}
            title={project.title}
            gitHub={project.gitHub}
            tech={project.tech}
            liveUrl={project.liveUrl}
          />
        ))}
        </div>
      </div>
    );
  }
}

export default Projects;

