import React from "react";
import { Col, Row } from "react-bootstrap";

function OadkImages() {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <img
            id="oadk-main"
            alt="Ocean and Dexter's Kitchen"
            src="/images/oadkFrame.png"
          />
        </Col>
      </Row>
      <Row id="oadk-phone-row">
        <Col lg={4} className="text-left">
          <img
            className="oadk-img"
            alt="Ocean and Dexter's Kitchen Phone Home"
            src="/images/oadk-phone1.png"
          />
        </Col>
        <Col lg={4} className="text-center">
          <img
            className="oadk-img"
            alt="Ocean and Dexter's Kitchen Phone Recipes"
            src="/images/oadk-phone2.png"
          />
        </Col>
        <Col lg={4} className="text-right">
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
