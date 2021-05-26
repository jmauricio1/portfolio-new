import React from "react";
import { Col, Row } from "react-bootstrap";

function OadkImages() {
  return (
    <div>
      <Row className="mb-5">
        <Col className="no-space" lg={12}>
          <img
          className="full-width"
            alt="Ocean and Dexter's Kitchen"
            src="/images/oadkFrame.png"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={4} xs={6} className="text-center mb-4">
          <img
            className="oadk-img"
            alt="Ocean and Dexter's Kitchen Phone Home"
            src="/images/oadk-phone1.png"
          />
        </Col>
        <Col lg={4} xs={6} className="text-center">
          <img
            className="oadk-img"
            alt="Ocean and Dexter's Kitchen Phone Recipes"
            src="/images/oadk-phone2.png"
          />
        </Col>
        <Col lg={{span: 4, offset: 0}} xs={{span: 6, offset: 3}} className="text-center">
          <img
            className="oadk-img"
            alt="Ocean and Dexter's Kitchen Phone About"
            src="/images/oadk-phone3.png"
          />
        </Col>
      </Row>
    </div>
  );
}

export default OadkImages;
