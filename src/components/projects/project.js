import React from "react";
import { Container } from "react-bootstrap";

function Project(props) {
  return (
    <Container className="no-space">
      <h4>
        <a href={props.link}>{props.title}</a>
      </h4>
      {props.paragraphs.map((par, index) => {
        return(
          <p key={index}>{par}</p>
        )
      })}
    </Container>
  );
}

export default Project;
