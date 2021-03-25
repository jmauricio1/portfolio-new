import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Fade from "react-reveal/Fade";

function About() {
  return (
    <section id="about" className="section-padding l-blue">
      <Container>
        <Fade bottom>
          <h2 className="section-title">About Myself</h2>
        </Fade>
        <Row id="about-row-1">
          <Col md={1}></Col>
          <Col md={2}>
            <Fade bottom>
              <i className="fas fa-glasses about-icon"></i>
            </Fade>
          </Col>
          <Col md={8}>
            <Fade bottom>
              <p id="about-desc-1" className="about-desc">
                <b>Greetings!</b> My name is Joshua Jacob Mauricio, but you may
                call me Josh 😊 I am a 2020 computer science graduate from
                Western Oregon University and an aspiring software developer. I
                am experienced in full-stack development and enjoy collaborating
                with others to reach our shared goals. Individually, I am able
                to adapt to varying work environments and I am always trying to
                improve myself as a developer, team member, and a person.
              </p>
            </Fade>
          </Col>
          <Col md={1} sm={0} xs={0}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={8}>
            <Fade bottom>
              <p id="about-desc-2" className="about-desc">
                Outside of coding, I like to be creative and express myself in
                other forms. I like listening to a lot of music, especially
                vinyl jazz records. I also like to explore the great outdoors
                and spend my time enjoy some of my time with nature.
              </p>
            </Fade>
          </Col>
          <Col md={2}>
            <Fade bottom>
              <i className="fas fa-icons about-icon"></i>
            </Fade>
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
