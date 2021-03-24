import React from "react";
import { Container } from "react-bootstrap";

import Fade from "react-reveal/Fade";

function Title() {
  return (
    <section id="title" className="l-blue">
      <Container>
        <Fade bottom>
          <h1 id="title-name">Hello, I'm Josh!</h1>
          <p id="title-desc">A Software Developer</p>
          <a href="#about">
            <i className="fas fa-arrow-circle-down"></i>
          </a>
        </Fade>
      </Container>
    </section>
  );
}

export default Title;
