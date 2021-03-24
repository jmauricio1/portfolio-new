import React from "react";
import {
  Bootstrap,
  DotNet,
  Git,
  Github,
  Jquery,
  Microsoftazure,
  Microsoftsqlserver,
  Mongodb,
  NodeDotJs,
  Npm,
  Visualstudiocode,
  Visualstudio,
} from "@icons-pack/react-simple-icons";
import { Row, Col } from "react-bootstrap";
import ReactIcon from './../images/svgs/dev/react.svg';
import ASP from './../images/svgs/dev/asp-file-format-symbol.svg';

function TechnologiesIcons() {
  const iconSize = 75;

  return (
    <Row md={6}>
      <Col>
        <Visualstudio color="#5C2D91" size={iconSize} />
        <br />
        <p>Visual Studio</p>
      </Col>
      <Col>
        <Visualstudiocode color="#007ACC" size={iconSize} />
        <br />
        <p>Visual Studio Code</p>
      </Col>
      <Col>
        <Git color="#F05032" size={iconSize} />
        <br />
        <p>Git</p>
      </Col>
      <Col>
        <Github color="#181717" size={iconSize} />
        <br />
        <p>Github</p>
      </Col>
      <Col>
        <Microsoftazure color="#0089D6" size={iconSize} />
        <br />
        <p>Microsoft Azure</p>
      </Col>
      <Col>
        <Microsoftsqlserver color="#CC2927" size={iconSize} />
        <br />
        <p>Microsoft SQL Server</p>
      </Col>
      <Col>
        <Mongodb color="#47A248" size={iconSize} />
        <br />
        <p>MongoDB</p>
      </Col>
      <Col>
        <Bootstrap color="#7952B3" size={iconSize} />
        <br />
        <p>Bootstrap</p>
      </Col>
      <Col>
        <Jquery color="#0769AD" size={iconSize} />
        <br />
        <p>jQuery</p>
      </Col>
      <Col>
        <NodeDotJs color="#339933" size={iconSize} />
        <br />
        <p>Node.js</p>
      </Col>
      <Col>
        <Npm color="#CB3837" size={iconSize} />
        <br />
        <p>Node Package Manager</p>
      </Col>
      <Col>
      <img src={ReactIcon} alt="React" className="svg-icon"/>
        <br />
        <p>React</p>
      </Col>
      <Col>
      <img src={ASP} alt="ASP" className="svg-icon"/>
        <br />
        <p>ASP</p>
      </Col>
      <Col>
      <DotNet color="#512BD4" size={iconSize} />
        <br />
        <p>.NET Framework</p>
      </Col>
    </Row>
  );
}

export default TechnologiesIcons;
