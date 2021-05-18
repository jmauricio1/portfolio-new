import React from "react";
import {Form, Row, Col, Button} from 'react-bootstrap'

function ContactForm() {
  return (
    <Form>
      <Form.Group as={Row} controlId="firstName">
        <Form.Label column md={5} className="text-right">
          First Name
        </Form.Label>
        <Col md={1}></Col>
        <Col md={6}>
          <Form.Control type="text" placeholder=">" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="lastName">
        <Form.Label column md={5} className="text-right">
          Last Name
        </Form.Label>
        <Col md={1}></Col>
        <Col md={6}>
          <Form.Control type="text" placeholder=">" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="message">
        <Form.Label column md={5} className="text-right">
          Message
        </Form.Label>
        <Col md={1}></Col>
        <Col lg={6}>
          <Form.Control as="textarea" placeholder=">" rows={5} />
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
