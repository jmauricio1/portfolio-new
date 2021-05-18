import React from "react";
import {Form, Row, Col, Button} from 'react-bootstrap';
import FormTextInput from './form-text-input';

function ContactForm() {
  return (
    <Form>
      <FormTextInput idName={"firstName"} label={"First Name"} />
      <FormTextInput idName={"lastName"} label={"Last Name"} />
      <Form.Group as={Row} controlId="message">
        <Form.Label column md={5} className="text-right">
          Message
        </Form.Label>
        <Col md={1}></Col>
        <Col lg={6}>
          <Form.Control as="textarea" rows={5} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="justify-content-lg-end">
        <Col lg={6} className="text-right">
          <Button variant="primary">Send</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
