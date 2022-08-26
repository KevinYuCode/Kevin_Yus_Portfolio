import React from "react";
import Container from "../components/Container";
import Profile_Picture from "../assets/Profile_Picture.jpg";
function about() {
  return (
    <div id="about" className="about-container full-s-h">
      <Container classProp="about">
        <div className="about-title row-fs-c">
          <h1>About Me</h1>
        </div>
        <div className="about-content col-c-fs">
          <p>
            Hi! My name is Kevin Yu, I'm a Computer Engineering student at Queens University. I developed a
            passion for engineering in the 10th grade when I made an LED turn on with some copied and pasted
            code I found online that I uploaded to a microcontoller. Since that day, I developed a passion for
            computer technology and that has lead me to explore topics such as full-stack development,
            electronics, computer networks, and even entreprenuership in the tech industry.
          </p>
          <p>
            Fast forward to today, I have had the opportunity to exercise my technical skills through
            designing and developing websites for clients and committees, competing and placing in hackathons,
            working in the startup industry, as well as building my own tech-startup.{" "}
          </p>
          <p className="about-technologies">Here are a few technologies I've been working with recently:</p>
          <ul>
            {["React.js/Next.js", "Node.js", "Python", "CSS", "Firebase", "GCP"].map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="about-image row-c-c">
          <img src={Profile_Picture} alt="" width={350} height={350} />
        </div>
      </Container>
    </div>
  );
}

export default about;
