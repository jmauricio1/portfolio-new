import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-reveal";

function Project(props) {
  return (
    <Container className="no-space">
      <Fade right duration={2000}>
        <h4>
          <a className="project-link" href={props.link}>
            {props.title}
          </a>
        </h4>
        {props.paragraphs.map((par, index) => {
          return <p key={index}>{par}</p>;
        })}
      </Fade>
    </Container>
  );
}

export default Project;
