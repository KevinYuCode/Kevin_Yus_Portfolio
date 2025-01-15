import React from "react";
import Container from "../components/Container";
import Profile_Picture from "../assets/Profile_Picture.jpg";
function about() {
  return (
    <div id="about" className="about-container">
      <Container classProp="about">
        <div className="about-title row-fs-c">
          <h1>About Me</h1>
        </div>
        <div className="about-content col-c-fs">
          <p className="!font-bold">Howdy 👋!</p>
          <p>
            My name is Kevin Yu, I'm a 4th year Computer Engineering 💻 Student
            at Queens University. Besides being a programmer, I'm an active
            long-distance runner 🏃, I enjoy reading non-fiction books 📚 about
            psychology and self improvement, and I dabble here and there into
            UI/UX design 🎨.
          </p>
          <p>
            Now, I decided on Computer Engineering 🔌 as a career option because
            I've always dreamt of building cool technology 📱 that could impact
            me or someone else in their day to day lives. This ambition of mine
            has lead me down ventures such as working at a small startup
            company, competing in hackathons, developing websites, building
            order management systems for clients as well as working as a
            software engineering intern.
          </p>
          <p>
            Recently, I just finished my internship at PWC
            (PricewaterhouseCoopers) working as a software engineering intern,
            and now I'm finishing up my senior year of university. We'll see
            where life takes me from here, but I'm excited for whatever life
            throws my way 🎓!
          </p>
          <p className="about-technologies">
            Here are a few technologies I've been working with recently:
          </p>
          <ul>
            {[
              "Next.js",
              "Angular",
              "Node.js",
              "Python",
              ".NET6",
              "Tailwind",
              "Firebase",
              "C/C++",
            ].map((tech) => (
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
