import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AboutHover from "./AboutHover";
import info from "../../info";
import SocialIcons from "./SocialIcons";
import { Fade } from "react-reveal";

function About() {
  let aboutInfo = info.about;
  return (
    <section id="about" className="section-layout">
      <Fade duration={2000}>
        <h2>
          I develop web apps <br /> & software
        </h2>
      </Fade>
      {/* <img id="about-img" src="/images/about.jpg" alt="temp" /> */}
      <Fade delay={1000} duration={2000}>
        <AboutHover />
      </Fade>
      <Container>
        <Fade bottom duration={1500}>
          <h3>About</h3>
          <h4>{aboutInfo.quote}</h4>

          {aboutInfo.paragraphs.map((par, index) => {
            return <p key={index}>{par}</p>;
          })}
        </Fade>
        <Row>
          <SocialIcons />
          <Col xs={6} className="text-right">
            <Button
              id="resume-btn"
              variant="outline-primary"
              href="/images/JoshuaJacobMauricio.Resume.pdf"
              target="_black"
            >
              Resume
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
    </section>
  );
}

export default About;
