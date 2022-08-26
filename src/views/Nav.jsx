import React from "react";
import Container from "../components/Container";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
function Nav({ scrollTo }) {
  return (
    <nav className="nav-container">
      <Container classProp="nav row-sb-c">
        <div className="nav-toggle">
          <BiMenuAltRight />
        </div>
        <div className="nav-close">
          <CgClose />
        </div>
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
          <a href="Kevin_Yus_Resume.pdf" download="Kevin_Yus_Resume">
            Resume
          </a>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
