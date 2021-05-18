import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function FormTextInput(props) {
  return (
    <Form.Group as={Row} controlId={props.idName}>
      <Form.Label column md={5} className="text-right">
        {props.label}
      </Form.Label>
      <Col md={1}></Col>
      <Col md={6}>
        <Form.Control type="text" />
      </Col>
    </Form.Group>
  );
}
