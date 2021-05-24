import React from "react";
import { Row, Col } from "react-bootstrap";

function PuppertImages() {
  return (
    <Row className="no-space">
      <Col lg={7} className="no-space">
        <img
          src="/images/puppert-1.png"
          alt="Puppert phone view"
          className="full-width"
        />
      </Col>
      <Col lg={{span: 2, offset: 1}}>
        <img
          src="/images/Puppert-phone.png"
          alt="Puppert phone view"
          className="full-width phone-right"
        />
      </Col>
    </Row>
  );
}

export default PuppertImages;
