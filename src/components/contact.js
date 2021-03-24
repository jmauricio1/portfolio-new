import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import emailjs from "emailjs-com";

require('dotenv');

function Contact() {
  const [sentEmail, setSentEmail] = useState(false);

  const [contactParams, setParams] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setParams((previousValues) => {
      return {
        ...previousValues,
        [name]: value,
      };
    });
  }

  function handleContactSubmit(e) {
    emailjs
      .send(
        contactParams,
      )
      .then(
        (response) => {
          setSentEmail(true);
          setParams({
            name: "",
            email: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    e.preventDefault();
  }

  return (
    <section id="contact" className="section-padding l-blue">
      <Container>
        <h2>Let's Chat!</h2>
        <p>Feel free to contact me and we can converse some time 🐱‍🏍</p>
        <Form>
          <Form.Group>
            <Form.Control
              name="name"
              type="text"
              onChange={handleInputChange}
              placeholder="Your Name"
              value={contactParams.name}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              onChange={handleInputChange}
              name="email"
              placeholder="Your Email"
              value={contactParams.email}
            />
            <Form.Text className="text-muted">
              Don't worry, I won't do anything sketchy with your email.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <FormControl
              as="textarea"
              onChange={handleInputChange}
              name="message"
              placeholder="Your Message..."
              rows={8}
              value={contactParams.message}
            />
          </Form.Group>
          <Button className={(sentEmail) ? "btn-large btn-success" : "btn-lg submit-button"} onClick={handleContactSubmit}>
            Send &#10148;
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
