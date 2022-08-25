import React from "react";
import Container from "../components/Container";
function Contact() {
  return (
    <div className="contact-container">
      <Container classProp="contact col-c-c">
        <h1>Get In Touch</h1>
        <p>
          I'm always open to new opportunities and learning new things in the field of Computer Engineering.
          Feel free to reach out to me if you have a question or just want to say hi! I'd love to connect with
          others and make new friends :){" "}
        </p>
        <button>Say Hi</button>
      </Container>
    </div>
  );
}

export default Contact;
