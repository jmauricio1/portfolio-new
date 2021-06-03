import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./contact/ContactForm";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <section className="section-layout">
      <Container>
        <Fade duration={2000}>
          <h2>Contact</h2>
        </Fade>
        <Fade delay={1000} duration={2000}>
          <h3>Feel free to reach out to me and send me a message!</h3>
        </Fade>
        <ContactForm />
      </Container>
    </section>
  );
}

export default Contact;
