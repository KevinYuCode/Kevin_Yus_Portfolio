import React from "react";
import Container from "../components/Container";
function Nav() {
  return (
    <nav className="nav-container">
      <Container classProp="row-sb-c">
        <div className="nav-logo">
          <h1>KY</h1>
        </div>
        <div className="nav-links row-fe-c full-w-h">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#f">Resume</a>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
