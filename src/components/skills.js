import React from "react";
import "@icons-pack/react-simple-icons";
import LangauageIcons from "./language-icons";
import TechnologiesIcons from "./technologies-icons";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <section id="skills" className="section-padding l-blue">
      <Container>
        <h2 className="section-title">Skills</h2>
        <p id="skills-desc">
          I've gained a lot skills along the way on my coding journey. Aside
          from languages and technologies, I've gained skills on basic Web
          Design Principles. Agile Methodologies, the Software Development Life
          Cycle, Relational Databases, NoSQL, and Continuous
          Intergration/Deployment.
        </p>
        <Row id="skills-row-1">
          <Col md={3}>
            <h3>Languages</h3>
          </Col>
          <Col md={8}>
            <LangauageIcons />
          </Col>
          <Col md={1}></Col>
        </Row>
        <Row>
          <Col md={3}>
            <h3>My Toolbox</h3>
          </Col>
          <Col md={8}>
            <TechnologiesIcons />
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
