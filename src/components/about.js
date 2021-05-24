import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TheHover from "../the-hover";
import info from './../info';
import SocialIcons from "./about/social-icons";

function About() {

  let aboutInfo = info.about;
  return (
    <section id="about" className="section-layout">
      <h2>
        I develop web apps <br /> & software
      </h2>
      {/* <img id="about-img" src="/images/about.jpg" alt="temp" /> */}
      <TheHover />
      <Container>
        <h3>About</h3>
        <h4>
          {aboutInfo.quote}
        </h4>
          {aboutInfo.paragraphs.map((par, index) => {
            return(
              <p key={index}>{par}</p>
            )
          })}
        <Row>
          <SocialIcons />
          <Col xs={6} className="text-right">
            <Button id="resume-btn" variant="outline-primary" href="/images/JoshuaJacobMauricio.Resume.pdf" target="_black">Resume</Button>
          </Col>
        </Row>
      </Container>
      <br />
    </section>
  );
}

export default About;
