import React from "react";
import Container from "../components/Container";
import Footer from "../views/Footer";

function Contact() {
  return (
    <div id="contact" className="contact-container full-s-h">
      <Container classProp="contact col-c-c">
        <h1>Get In Touch</h1>
        <p>
          Feel free to reach out and say hi, I'm always happy to meet new people
          share any knowledge or advice that I may have.
        </p>
        <a href="mailto: yu.kevin2002@gmail.com">Say Hi</a>
        <Footer />
      </Container>
    </div>
  );
}

export default Contact;
