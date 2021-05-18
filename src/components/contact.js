import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "./contact/contact-form";

function Contact() {
  return (
    <section className="section-layout">
      <Container>
        <h2>Contact</h2>
        <h3>Feel free to reach out to me and send me a message!</h3>
        <ContactForm />
      </Container>
    </section>
  );
}

export default Contact;
