import React from 'react';
import { Col, Row } from 'react-bootstrap';

function OadkImages(){
  return (
    <Row>
      <Col lg={12}>
        <img id="oadk-main" alt="Ocean and Dexter's Kitchen" src="/images/oadkFrame.png" />
      </Col>
      <Col lg={4}><img className="oadk-img" alt="Ocean and Dexter's Image Phone Home" src="/images/oadk-phone1.png"/></Col>
      <Col lg={4}></Col>
      <Col lg={4}></Col>
      <Col lg={4}></Col>
    </Row>
  )
}

export default OadkImages;