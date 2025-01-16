import React from "react";
import Container from "../components/Container";
import PROFILE_PICTURE from "@/assets/profile-picture.jpeg";
function about() {
  return (
    <div id="about" className="about-container">
      <Container classProp="about">
        <div className="about-title row-fs-c">
          <h1>About Me</h1>
        </div>
        <div className="about-content col-c-fs text-left">
          <p className="!font-bold">Howdy 👋</p>
          <p>
            My name is Kevin Yu, and I'm a 2024 Computer Engineering graduate
            from Queen's University. I am currently seeking full-time
            opportunities in Software Development and Frontend Engineering.
          </p>
          <p>
            While between jobs, I’m spending time with my family, helping out at
            their restaurant, and focusing on learning new skills and working on
            side projects to grow as an engineer. At the moment, I’m developing
            a self-service kiosk for my family’s restaurant—stay tuned for the
            final result!
          </p>
          <p className="about-technologies">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="justify-left lg:justify-center">
            {[
              "Next.js",
              "Typescript",
              "PostgreSQL",
              "Tailwind CSS",
              "Drizzle",
              "Zod",
              "Playwright",
              "Jest",
            ].map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="about-image row-c-c">
          <img src={PROFILE_PICTURE} alt="" width={350} height={350} />
        </div>
      </Container>
    </div>
  );
}

export default about;
