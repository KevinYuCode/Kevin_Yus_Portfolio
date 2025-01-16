import React from "react";
import Container from "../components/Container";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HACKATHONS } from "../data/projectData";
function Projects() {
  return (
    <div id="projects" className="projects-container">
      <Container classProp={"projects col-c-fs "}>
        <div className="projects-title">
          <h1>Hackathons</h1>
        </div>
        {HACKATHONS.map((project, i) => (
          <div
            className={`project-container ${
              i % 2 === 0 ? "row-fe-c" : "row-fs-c"
            }`}
            key={i}
          >
            <div
              className={`${
                i % 2 === 0 ? "project-tag" : "project-tag-mirrored"
              } col-c-fs`}
            >
              <h2>{project.name}</h2>
              <h3>{project.ranking}</h3>
              <p>{project.description}</p>
              {/* Github or Website */}
              <div
                className={`${
                  i % 2 === 0 ? "row-fe-c" : "row-fs-c"
                } project-links`}
              >
                {project.gitHub && (
                  <a href={project.gitHub} target="notarget">
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
            <div
              className={`${
                i % 2 === 0 ? "project-image" : "project-image-mirrored"
              }`}
            >
              <img src={project.image} alt="Project" />
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Projects;
