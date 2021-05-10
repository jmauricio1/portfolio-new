import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function BwcImages() {
  return (
    <Container fluid className="no-space project-container">
      <Row className="no-space">
        <Col lg={7} className="no-space">
          <img
            className="bwc-desktop"
            src="/images/bwc-top.png"
            alt="The black and white collection initial home page"
          />
        </Col>
        <Col lg={1}></Col>
        <Col lg={2}>
          <img
            id="bwc-phone-top"
            className="bwc-phone"
            src="/images/bwcollexPhone.png"
            alt="The black and white collection initial home page"
          />
        </Col>
      </Row>
      <div style={{height: "5rem"}}></div>
      <Row className="no-space">
        <Col lg={2}></Col>
        <Col lg={2}>
          <img
          id="bwc-phone-bottom"
            className="bwc-phone"
            src="/images/bwc-phone-2.jpg"
            alt="The black and white collection initial home page"
          />
        </Col>
        <Col lg={1}></Col>
        <Col lg={7} className="no-space">
          <img
            className="bwc-desktop"
            src="/images/bwc-mid.jpg"
            alt="The black and white collection initial home page"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default BwcImages;
