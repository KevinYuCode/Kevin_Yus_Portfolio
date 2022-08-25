import React, { useState } from "react";
import Container from "../components/Container";
import { WORK_EXPERIENCE } from "../data/workData";
import IVORY_OMS from "../assets/IVORY_OMS.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";
function Work() {
  const [workDetails, setWorkDetails] = useState(WORK_EXPERIENCE[0]);
  return (
    <div className="work-container full-s-h">
      <Container classProp="work col-c-fs">
        {/* Work Title */}
        <div className="work-title row-fs-c">
          <h1>Where I've Worked</h1>
        </div>

        {/* Work Content */}
        <div className="work-content col-c-fs">
          {/* Work Tabs */}
          <div className="work-list row-fs-c">
            {WORK_EXPERIENCE.map((work) => (
              <button
                className="work-name"
                onClick={() => {
                  setWorkDetails(work);
                }}
                style={{borderBottom: workDetails.company === work.company? "solid 2px #059f76": "none" }}
              >
                {work.company}
              </button>
            ))}
          </div>

          {/* Work Description */}
          <div className="work-details col-c-fs">
            {/* Position & Company Name */}
            <h2>
              {workDetails.position}{" "}
              <span className="work-company">
                @ {workDetails.company}
                {workDetails.company === "NOMAD" && " - Acquired by WISH STR Enterprises"}
              </span>
            </h2>
            <h4 className="work-time-line">{workDetails.timeline}</h4>
            <div className="work-technologies row-se-c">
              {workDetails.technologies.map((tech) => (
                <p>{tech}</p>
              ))}
            </div>

            {/* Highlights */}
            <ul className="work-highlights-container col-c-fs">
              {workDetails.highlights.map((highlight) => (
                <li>{highlight}</li>
              ))}
            </ul>

            {/* Work Links */}
            <div className="work-links row-se-c">
              {workDetails.github && (
                <a href={workDetails.github} target="notarget">
                  <FiGithub />
                </a>
              )}
              {workDetails.website && (
                <a href={workDetails.website} target={"noreferrer"}>
                  <FiExternalLink />
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Work;
