import React from "react";
import { Container } from "react-bootstrap";
import AstroImages from "../FeaturedImages/AstroImages";
import BwcImages from "../FeaturedImages/BwcImages";
import OadkImages from "../FeaturedImages/OceanImages";
import PuppertImages from "../FeaturedImages/PuppertImages";
import Project from "./Project";

import info from "../../../info";

export default function FeaturedProjects() {
  let projList = info.projects.featured;

  return (
    <section className="section-layout">
      <Container>
        <h2>Featured</h2>
        <h3>Client Work</h3>
        <Project
          link={projList[0].link}
          title={projList[0].title}
          paragraphs={projList[0].paragraphs}
        />
      </Container>
      <Container className="project-container">
        <OadkImages />
      </Container>
      <Container>
        <h3>Personal Projects</h3>
        <Project
          link={projList[1].link}
          title={projList[1].title}
          paragraphs={projList[1].paragraphs}
        />
      </Container>
      <BwcImages/>
      <Container className="project-container">
        <Project
          link={projList[2].link}
          title={projList[2].title}
          paragraphs={projList[2].paragraphs}
        />
        <img
          className="full-width no-space"
          alt="Portfolio home page"
          src="/images/portfolio.jpg"
        />
      </Container>
      <Container fluid className="no-space">
        
      </Container>
      <Container>
        <Project
          link={projList[3].link}
          title={projList[3].title}
          paragraphs={projList[3].paragraphs}
        />
      </Container>
      <Container fluid className="no-space">
        <PuppertImages />
      </Container>
      <Container>
        <h3>School Projects</h3>
        <Project
          link={projList[4].link}
          title={projList[4].title}
          paragraphs={projList[4].paragraphs}
        />
      </Container>
      <Container className=" project-container">
        <AstroImages />
      </Container>
    </section>
  );
}
