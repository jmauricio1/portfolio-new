import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function BwcImages() {
  return (
    <Container fluid className="no-space project-container image-row">
      <Row className="no-space">
        <Col lg={7} xs={12} className="no-space mb-4">
          <img
            className="full-width"
            src="/images/bwc-top.png"
            alt="The black and white collection initial home page"
          />
        </Col>
        <Col lg={{span: 2, offset: 1}} xs={{span: 8, offset: 0}} md={{span: 6, offset: 0}} className="mb-4">
          <img
            className="full-width phone-right"
            src="/images/bwcollexPhone.png"
            alt="The black and white collection initial home page"
          />
        </Col>
      </Row>
      <Row className="no-space justify-content-end">
        <Col lg={2} xs={{span: 8}} md={{span: 6, offset: 0}} className="mb-4">
          <img
            className="full-width phone-left"
            src="/images/bwc-phone-2.jpg"
            alt="The black and white collection initial home page"
          />
        </Col>
        <Col lg={1}></Col>
        <Col lg={7} xs={12} className="no-space">
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
