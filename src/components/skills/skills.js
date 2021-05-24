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
        <Row className="no-space">
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Javascript className="p-icon" color="#F7DF1E" size="100%" />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Csharp className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#239120" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Cplusplus className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#00599C" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Html5
              color="#FFF" className="p-icon"
              style={{ backgroundColor: "#E34F26" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <CssThree
              color="#FFF" className="p-icon"
              style={{ backgroundColor: "#1572B6" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <ReactJs
              color="#FFF" className="p-icon"
              style={{ backgroundColor: "#61DAFB" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Visualstudio
            className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#5C2D91" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Visualstudiocode className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#007ACC" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Git className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#F05032" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Github className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#181717" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Microsoftazure className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#0089D6" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Microsoftsqlserver className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#CC2927" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Mongodb className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#47A248" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Bootstrap className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#7952B3" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Jquery className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#0769AD" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <NodeDotJs className="p-icon"
              color="#FFF"
              style={{ backgroundColor: "#339933" }}
              size="100%"
            />
          </Col>
          <Col className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
            <Npm className="p-icon"
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
