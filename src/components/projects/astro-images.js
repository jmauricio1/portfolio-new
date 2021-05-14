import React from "react";
import { Row, Col } from "react-bootstrap";

function AstroImages() {
  return (
    <Row className="no-space">
      <Col className="no-space" lg={7}>
        <img
          className="contain-full-image"
          alt="Earth tab from the planets page from Astronomical Learning"
          src="/images/al-1.jpg"
        />
      </Col>
      <Col lg={5}></Col>
      <Col lg={5}></Col>
      <Col className="no-space" lg={7}>
        {" "}
        <img
          className="contain-full-image"
          alt="Earth tab from the planets page from Astronomical Learning"
          src="/images/al-3.jpg"
        />
      </Col>
      <Col lg={2}></Col>
      <Col className="no-space" lg={8}>
        {" "}
        <img
          className="contain-full-image"
          alt="Earth tab from the planets page from Astronomical Learning"
          src="/images/al-4.jpg"
        />
      </Col>
    </Row>
  );
}

export default AstroImages;
