import React from 'react';
import {Row, Col} from 'react-bootstrap';

function TindogImages(){
  return(
    <Row>
          <Col lg={12}>
            <img
              className="contain-full-image"
              src="/images/tindog1.png"
              alt="TinDog"
            />
          </Col>
          <Col lg={12}>
            <img
              className="contain-full-image"
              src="/images/tindog2.png"
              alt="TinDog"
            />
            <p></p>
          </Col>
          <Col lg={12}>
            <img
              className="contain-full-image"
              src="/images/tindog3.png"
              alt="TinDog"
            />
          </Col>
        </Row>
  )
}

export default TindogImages;