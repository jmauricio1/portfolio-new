import React from "react";
import { Form, Row,} from "react-bootstrap";

export default function FormTextInput(props) {
  return (
    <Form.Group as={Row} controlId={props.idName} className="input-spacing">
      <Form.Label className="text-left">
        <h5>{props.label}</h5>
      </Form.Label>
        <Form.Control type={props.type} onChange={props.onChange} name={props.idName}/>
    </Form.Group>
  );
}
