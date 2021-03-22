import React from "react";
import pic from "./../images/portfolio-pic.jpg";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="section-padding">
      <Container>
        <Row>
          <Col md={5}>
            <img src={pic} id="about-pic" alt="At Knott's Berry Farm" />
          </Col>
          <Col md={7}>
            <p id="about-desc">
              <b>Greetings!</b> My name is Joshua Jacob Mauricio, but you may call me
              Josh 😊 I am a 2020 computer science graduate from Western Oregon
              University and an aspiring software developer. I am expereinced in
              full-stack development and enjoy collaborating with others to
              reach our shared goals. Individually, I am able to adapt to
              varying work environments and I am always trying to improve myself
              as a developer, team member, and a person.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
