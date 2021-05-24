import React from 'react';
import {Row, Col} from 'react-bootstrap';

function TindogImages(){
  return(
    <Row>
          <Col lg={12} className="mb-5">
            <img
              className="full-width"
              src="/images/tindog1.png"
              alt="TinDog"
            />
          </Col>
          <Col lg={12} className="mb-5">
            <img
              className="full-width"
              src="/images/tindog2.png"
              alt="TinDog"
            />
            <p></p>
          </Col>
          <Col lg={12} className="mb-5">
            <img
              className="full-width"
              src="/images/tindog3.png"
              alt="TinDog"
            />
          </Col>
        </Row>
  )
}

export default TindogImages;