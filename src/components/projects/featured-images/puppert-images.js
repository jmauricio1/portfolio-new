import React from 'react';
import { Row, Col } from 'react-bootstrap';

function PuppertImages(){
  return(
    <Row className="no-space">
          <Col lg={7} className="no-space">
            <img
              src="/images/puppert-1.png"
              alt="Puppert phone view"
              className="contain-full-image"
            />
          </Col>
          <Col lg={1}></Col>
          <Col lg={2}>
            <img
              src="/images/Puppert-phone.png"
              alt="Puppert phone view"
              className="contain-full-image bwc-phone-top"
            />
          </Col>
        </Row>
  )
}

export default PuppertImages;