import React from "react";
import "@icons-pack/react-simple-icons";
import LangauageIcons from "./language-icons";
import TechnologiesIcons from "./technologies-icons";
import {Container} from 'react-bootstrap';

function Skills() {
  return (
    <section id="skills" className="full-height">
      <Container fluid>
        <h2>Skills</h2>
        <h3>Languages</h3>
        <LangauageIcons />
        <h3>Tools & Technologies</h3>
        <TechnologiesIcons />
      </Container>
    </section>
  );
}

export default Skills;
