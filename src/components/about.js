import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import info from './../info';
import SocialIcons from "./about/social-icons";

function About() {

  let aboutInfo = info.about;
  return (
    <section id="about" className="section-layout">
      <h2 id="about-title">
        I develop web apps <br /> & software
      </h2>
      <img id="about-img" src="/images/about.jpg" alt="temp" />
      <Container>
        <h3>About</h3>
        <h4>
          {aboutInfo.quote}
        </h4>
          {aboutInfo.paragraphs.map((par) => {
            return(
              <p>{par}</p>
            )
          })}
        <Row>
          <SocialIcons />
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
