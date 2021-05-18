import React from "react";
import { Col } from "react-bootstrap";

function SocialIcons() {
  return (
    <Col sm={6}>
      <a href="/" className="social-icon">
        <i className="fab fa-linkedin"></i>
      </a>{" "}
      <a href="/" className="social-icon">
        <i className="fab fa-github-square"></i>
      </a>{" "}
    </Col>
  );
}

export default SocialIcons;
