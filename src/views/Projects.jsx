import React from "react";
import Container from "../components/Container";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../data/projectData";
function Projects() {
  return (
    <div className="projects-container">
      <Container classProp={"projects col-c-fs "}>
        <div className="projects-title">
          <h1>Projects</h1>
        </div>
        {PROJECTS.map((project, i) => (
          <div className="project-container row-c-c" key={i}>
            <div className={`${i % 2 === 0 ? "project-tag" : "project-tag-mirrored"} col-c-fs`}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="project-links">
                {project.gitHub && (
                  <a href={project.github} target="notarget">
                    <FiGithub />
                  </a>
                )}
                {project.website && (
                  <a href={project.website} target="notarget">
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
            <div className={`${i % 2 === 0 ? "project-image" : "project-image-mirrored"}`}>
              <img src={project.image} alt="COOK_HACK" width={900} />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Projects;
