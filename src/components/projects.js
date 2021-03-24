import React from "react";
import portfolioImg from "./../images/online-porfolio.png";
import { Container, Row, Col } from "react-bootstrap";
import aslMac from "./../images/mac-al.png";
import macVotre from "./../images/mac-votre.png";

import Fade from 'react-reveal/Fade';

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <Fade bottom>
        <h2 id="projects-title">Projects</h2>
        </Fade>
        <Row>
          <Col>
            <img
              src={aslMac}
              className="projects-img"
              alt="Astronomical Learning Home Page"
            />
            <h4>Astronomical Learning</h4>
            <p>
              Used Agile/Scrum development methods to design and create an
              application that provides information regarding space and space
              travel. Contributed to backlog refinement, sprints (planning,
              reviews, retrospectives), and was also responsible for our Git
              repository, SendGrid implmentation, and CI/CD with Azure.
            </p>
          </Col>
          <Col>
            <img
              src={portfolioImg}
              className="projects-img"
              alt="Online Portfolio Home Page"
            />
            <h4>Online Portfolio</h4>
            <p>
              This is my online portfolio. I coded this using React.js as my
              front-end framework along with basic HTML/JSX and CSS. For the
              functionality of the contact form, I used Email.js to run that
              feature.
            </p>
          </Col>
          <Col>
            <img
              src={macVotre}
              className="projects-img"
              alt="Astronomical Learning Home Page"
            />
            <h4>Votre Nome</h4>
            <p>
              This project is <b>still in progress.</b> A lot of people have the
              same names, but they all are different characters. In this web
              application, we gathered data from random people to see how they
              would describe someone with a particular name. We used MongoDB to
              hold our survey data, Express.js, Node.js, and React.js as our
              front-end framework.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
