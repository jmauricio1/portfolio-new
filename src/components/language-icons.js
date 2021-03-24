import React from "react";
import {
  Cplusplus,
  Csharp,
  CssThree,
  Html5,
  Javascript,
} from "@icons-pack/react-simple-icons";
import SQL from "./../images/svgs/dev/files.svg";
import { Row, Col } from "react-bootstrap";

function LangauageIcons() {
  const iconSize = 75;

  return (
    <Row md={6}>
      <Col>
        <Javascript color="#F7DF1E" size={iconSize} />
        <br />
        <p>JavaScript</p>
      </Col>
      <Col>
        <Csharp color="#239120" size={iconSize} />
        <br />
        <p>C Sharp</p>
      </Col>
      <Col>
        <Cplusplus color="#00599C" size={iconSize} />
        <br />
        <p>C Plus Plus</p>
      </Col>
      <Col>
        <img src={SQL} alt="SQL" className="svg-icon" id="sql-icon"/>
        <br />
        <p>SQL</p>
      </Col>
      <Col>
        <Html5 color="#E34F26" size={iconSize} />
        <br />
        <p>HTML 5</p>
      </Col>
      <Col>
        <CssThree color="#1572B6" size={iconSize} />
        <br />
        <p>CSS 3</p>
      </Col>
    </Row>
  );
}

export default LangauageIcons;
