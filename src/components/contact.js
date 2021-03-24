import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import emailjs from "emailjs-com";
import Fade from 'react-reveal/Fade';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

function Contact() {
  const [sentEmail, setSentEmail] = useState(false);

  const [contactParams, setParams] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setSentEmail(false);

    setParams((previousValues) => {
      return {
        ...previousValues,
        [name]: value,
      };
    });
  }

  function handleContactSubmit(e) {
    emailjs.send(serviceID, templateID, contactParams, userID).then(
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
        <Fade bottom>
          <h2>Let's Chat!</h2>
          <p>Feel free to contact me and we can converse some time 🐱‍🏍</p>
        </Fade>
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
          <Button
            className={
              sentEmail ? "btn-lg btn-success" : "btn-lg submit-button"
            }
            onClick={handleContactSubmit}
          >
            Send &#10148;
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
