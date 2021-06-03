import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import info from "../../info";
import SkillIcon from "./SkillIcon";

function Skills() {
  const skills = info.skillIcons;

  return (
    <section id="skills" className="section-layout">
      <Container>
        <h2>Skills</h2>
        <Row className="no-space">
          {skills.map((skill, index) => {
            return (
              <Col key={index} className="no-space p-container" lg={2} xs={6} sm={4} md={3}>
                <SkillIcon icon={skill.name} full={skill.simpleIconName} color={skill.color} size="100%"/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
