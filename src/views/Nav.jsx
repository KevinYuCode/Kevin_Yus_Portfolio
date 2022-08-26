import React from "react";
import Container from "../components/Container";
import RESUME from "../data/Kevin_Yus_Resume.pdf";
function Nav({ scrollTo }) {
  return (
    <nav className="nav-container">
      <Container classProp="row-sb-c">
        <div
          className="nav-logo row-c-c"
          onClick={() => {
            scrollTo("landingPage");
          }}
        >
          <h1>KY</h1>
        </div>
        <div className="nav-links row-fe-c full-w-h">
          <button
            onClick={() => {
              scrollTo("about");
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              scrollTo("work");
            }}
          >
            Work
          </button>
          <button
            onClick={() => {
              scrollTo("projects");
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollTo("contact");
            }}
          >
            Contact
          </button>
          <a href={RESUME} download="Kevin_Yus_Resume">
            Resume
          </a>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
