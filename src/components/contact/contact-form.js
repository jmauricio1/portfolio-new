import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import FormTextInput from "./form-text-input";
import emailjs from "emailjs-com";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;

function ContactForm() {
  const [contactParams, setParams] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  function handleInputchange(e) {
    const { name, value } = e.target;

    console.log(`name: ${contactParams.firstName} ${contactParams.lastName}
    email: ${contactParams.email}
    message: ${contactParams.message}`);

    setParams((previousValues) => {
      return {
        ...previousValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    emailjs.send(serviceID, templateID, contactParams, userID).then(
      (response) => {
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
    <Form className="contact-form">
      <Row className="justify-content-center">
        <Col md={6} xs={12}>
          <FormTextInput
            idName={"firstName"}
            label={"First Name"}
            onChange={handleInputchange}
            type={"text"}
          />
          <FormTextInput
            idName={"lastName"}
            label={"Last Name"}
            onChange={handleInputchange}
            type="text"
          />
          <FormTextInput
            idName={"email"}
            label={"Email"}
            onChange={handleInputchange}
            type={"email"}
          />
          <Form.Group as={Row} controlId="message" onChange={handleInputchange}>
            <Form.Label className="text-left">
              <h5>Message</h5>
            </Form.Label>
            <Form.Control as="textarea" rows={5} name="message"/>
          </Form.Group>
          <Form.Group className="text-center">
            <Button variant="outline-primary" onClick={handleSubmit}>
              Send
            </Button>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default ContactForm;
