import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  Javascript,
  Csharp,
  Cplusplus,
  Html5,
  CssThree,
  ReactJs,
  Visualstudio,
  Visualstudiocode,
  Git,
  Github,
  Microsoftazure,
  Microsoftsqlserver,
  Mongodb,
  Bootstrap,
  Jquery,
  NodeDotJs,
  Npm,
} from "@icons-pack/react-simple-icons";

function Skills() {
  return (
    <section id="skills" className="section-layout">
      <Container>
        <h2>Skills</h2>
        <Row>
          <Col lg={2}>
            <div id="js-icon">
              <Javascript color="#F7DF1E" size="100%" />
            </div>
          </Col>
          <Col lg={2}>
            <Csharp
              color="#FFF"
              style={{ backgroundColor: "#239120" }}
              size="100%"
            />
            
          </Col>
          <Col lg={2}>
            <Cplusplus
              color="#FFF"
              style={{ backgroundColor: "#00599C" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Html5
              color="#FFF"
              style={{ backgroundColor: "#E34F26" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <CssThree
              color="#FFF"
              style={{ backgroundColor: "#1572B6" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <ReactJs
              color="#FFF"
              style={{ backgroundColor: "#61DAFB" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Visualstudio
              color="#FFF"
              style={{ backgroundColor: "#5C2D91" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Visualstudiocode
              color="#FFF"
              style={{ backgroundColor: "#007ACC" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Git
              color="#FFF"
              style={{ backgroundColor: "#F05032" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Github
              color="#FFF"
              style={{ backgroundColor: "#181717" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Microsoftazure
              color="#FFF"
              style={{ backgroundColor: "#0089D6" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Microsoftsqlserver
              color="#FFF"
              style={{ backgroundColor: "#CC2927" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Mongodb
              color="#FFF"
              style={{ backgroundColor: "#47A248" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Bootstrap
              color="#FFF"
              style={{ backgroundColor: "#7952B3" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Jquery
              color="#FFF"
              style={{ backgroundColor: "#0769AD" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <NodeDotJs
              color="#FFF"
              style={{ backgroundColor: "#339933" }}
              size="100%"
            />
          </Col>
          <Col lg={2}>
            <Npm
              color="#FFF"
              style={{ backgroundColor: "#CB3837" }}
              size="100%"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;