import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

function Contact() {
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
    console.log(`Final Params: \n ${contactParams.name} \n ${contactParams.email} \n ${contactParams.message}`);
    setParams({
      name: "",
      email: "",
      message: ""
    });
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
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="email"
              onChange={handleInputChange}
              name="email"
              placeholder="Your Email"
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
            />
          </Form.Group>
          <Button onClick={handleContactSubmit}>Send</Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
