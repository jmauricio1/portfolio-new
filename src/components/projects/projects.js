import React from "react";
import { Container } from "react-bootstrap";

function Projects() {
  return (
    <section id="projects" className="section-layout">
      <Container>
        <h2>Projects</h2>
          <a className="project-link" href="/featured"><h3>Featured</h3> <p>Client Work, Personal Projects, Undergraduate</p></a>
          <br />
          <a className="project-link" href="/bootcamp"><h3>Bootcamp</h3> <p>The App Brewery</p></a>
      </Container>
    </section>
  );
}

export default Projects;
