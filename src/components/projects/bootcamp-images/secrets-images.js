import React from 'react';
import {Row, Col} from 'react-bootstrap';

function SecretsImages(){
  return(
    <Row className="no-space">
          <Col lg={6} className="mb-5">
            <img
              className="full-width"
              src="/images/secrets-1.png"
              alt="Secrets home page"
            />
          </Col>
          <Col lg={6}>
            {" "}
            <img
              className="full-width mb-5"
              src="/images/secrets-2.png"
              alt="Secrets home page"
            />
          </Col>
          <Col lg={12}>
            {" "}
            <img
              className="full-width"
              src="/images/secrets-3.png"
              alt="Secrets home page"
            />
          </Col>
        </Row>
  )
}

export default SecretsImages;