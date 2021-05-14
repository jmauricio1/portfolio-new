import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="section-layout">
      <h2 id="about-title">
        I develop web apps <br /> & software
      </h2>
      <img id="about-img" src="/images/about.jpg" alt="temp" />
      <Container>
        <h3>About</h3>
        <h4>
          "In some ways, programming is like painting. You start with a blank
          canvas and certain basic raw materials. You use a combination of
          science, art, and craft to determine what to do with them." - Andrew
          Hunt
        </h4>
        <p>
          Hello, I'm Josh! I'm an aspiring developer with years of experience in
          developing software and web applications. I received my Bachelor of
          Science degree in Computer Science from Western Oregon University in
          2020. Post-graduation, I was also able to work towards and earn my
          certificate of completion from The Complete 2021 Web Development
          Bootcamp instructed by Dr. Angela Yu with the App Brewery. Since then,
          I have been involved in coding communities such as FreeCodeCamp and
          the App Brewery providing help to those learning software and web
          development.
          <br />
          <br />As a developer, I do not like being stagnant. I am always
          striving to be a better developer than the day before. Being curious
          and self-motivated, I push myself to keep learning new things, expand
          my knowledge, and take on new challenges. I am passionate about what I
          do and thus, apply my energetic, yet determined personality, in the
          process of building applications and producing software with a
          creative mind.
        </p>
        <Row>
          <Col sm={6}>
            <a href="" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>{" "}
            <a href="" className="social-icon">
              <i className="fab fa-github-square"></i>
            </a>{" "}
          </Col>
          <Col sm={6} className="text-right">
            <Button variant="outline-primary">Resume</Button>
          </Col>
        </Row>
      </Container>
      <br />
    </section>
  );
}

export default About;
