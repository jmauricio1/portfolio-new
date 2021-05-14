import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";

function Contact() {
  return (
    <section className="section-layout">
      <Container>
        <h2>Contact</h2>
        <h3>Feel free to reach out to me and send me a message!</h3>
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
      </Container>
    </section>
  );
}

export default Contact;
