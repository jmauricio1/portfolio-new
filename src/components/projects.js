import React from "react";
import astronomical from "./../images/astronomical-img.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <section id="projects" className="full-height">
      <Container>
        <h2 id="projects-title">Projects</h2>
        <Row md={3}>
          <Col>
            <img
              src={astronomical}
              className="projects-img"
              alt="Astronomical Learning Home Page"
            />
            <h4>Astronomical Learning</h4>
            <p>
              Used Agile/Scrum development methods to design and create an
              application that provides information regarding space and space travel.
              Contributed to backlog refinement, sprints (planning, reviews,
              retrospectives), and was also responsible for our Git repository,
              SendGrid implmentation, and CI/CD with Azure.
            </p>
          </Col>
          <Col>
            <img
              src={astronomical}
              className="projects-img"
              alt="Astronomical Learning Home Page"
            />
            <h4>Online Portfolio</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              pretium quam vulputate dignissim suspendisse in est ante. Non
              sodales neque sodales ut etiam sit.
            </p>
          </Col>
          <Col>
            <img
              src={astronomical}
              className="projects-img"
              alt="Astronomical Learning Home Page"
            />
            <h4>Votre Nome</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
              pretium quam vulputate dignissim suspendisse in est ante. Non
              sodales neque sodales ut etiam sit.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
