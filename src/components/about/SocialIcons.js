import React from "react";
import { Col } from "react-bootstrap";

function SocialIcons() {
  return (
    <Col xs={6}>
      <a href="https://www.linkedin.com/in/joshuajacobmauricio/" className="social-icon">
        <i className="fab fa-linkedin"></i>
      </a>{" "}
      <a href="https://github.com/jmauricio1" className="social-icon">
        <i className="fab fa-github-square"></i>
      </a>{" "}
    </Col>
  );
}

export default SocialIcons;
