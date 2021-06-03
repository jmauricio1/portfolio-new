import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-reveal";

function Projects() {
  return (
    <section id="projects" className="section-layout">
      <Container>
        <Fade duration={2000}>
          <h2>Projects</h2>
        </Fade>
        <Fade delay={1200} duration={2000}>
          <a className="project-link" href="/featured">
            <h3>Featured</h3>Client Work, Personal Projects, Undergraduate
          </a>
        </Fade>
        <br />
        <Fade delay={2000} duration={2000}>
          <a className="project-link" href="/bootcamp">
            <h3>Bootcamp</h3>The App Brewery
          </a>
        </Fade>
      </Container>
    </section>
  );
}

export default Projects;

//<span>Client Work, Personal Projects, Undergraduate</span>
