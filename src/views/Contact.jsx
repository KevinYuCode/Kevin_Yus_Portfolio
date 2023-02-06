import React from "react";
import Container from "../components/Container";
import Footer from "../views/Footer";

function Contact() {
  return (
    <div id="contact" className="contact-container full-s-h">
      <Container classProp="contact col-c-c">
        <h1>Get In Touch</h1>
        <p>
          I'm currently looking for opportuntities in Frontend Development, Full-Stack Development, DevOps, and Cyber Security. Feel free
          to reach out to me if you have a question or just want to say hi! I enjoy meeting and expanding my network!{" "}
        </p>
        <a href="mailto: yu.kevin2002@gmail.com">Say Hi</a>
        <Footer />
      </Container>
    </div>
  );
}

export default Contact;
