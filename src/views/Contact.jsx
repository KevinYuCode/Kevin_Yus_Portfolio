import React from "react";
import Container from "../components/Container";
function Contact() {
  return (
    <div className="contact-container full-s-h">
      <Container classProp="contact col-c-c">
        <h1>Get In Touch</h1>
        <p>
          I'm currently looking for opportuntities in Software Engineering, IT, and Cyber Security.
          Feel free to reach out to me if you have a question or just want to say hi! I'd love to connect with
          others and make new friends :){" "}
        </p>
        <a href="mailto: yu.kevin2002@gmail.com">Say Hi</a>
      </Container>
    </div>
  );
}

export default Contact;
