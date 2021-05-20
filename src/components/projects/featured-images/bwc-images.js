import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function BwcImages() {
  return (
    <Container fluid className="no-space project-container image-row">
      <Row className="no-space mb-5">
        <Col lg={7} className="no-space">
          <img
            className="full-width"
            src="/images/bwc-top.png"
            alt="The black and white collection initial home page"
          />
        </Col>
        <Col lg={{span: 2, offset: 1}}>
          <img
            className="full-width phone-top"
            src="/images/bwcollexPhone.png"
            alt="The black and white collection initial home page"
          />
        </Col>
      </Row>
      <Row className="no-space justify-content-end">
        <Col lg={2}>
          <img
            className="full-width phone-bottom"
            src="/images/bwc-phone-2.jpg"
            alt="The black and white collection initial home page"
          />
        </Col>
        <Col lg={1}></Col>
        <Col lg={7} className="no-space">
          <img
            className="full-width"
            src="/images/bwc-mid.jpg"
            alt="The black and white collection initial home page"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BwcImages;
