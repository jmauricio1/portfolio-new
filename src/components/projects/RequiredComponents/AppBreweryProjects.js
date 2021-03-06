import React from "react";
import { Container } from "react-bootstrap";
import info from "../../../info";
import Project from "./Project";
import SecretsImages from "../BootcampImages/SecretsImages";
import TindogImages from "../BootcampImages/TindogImages";
import { Fade } from "react-reveal";

function AppBreweryProjects() {
  let projList = info.projects.bootcamp;

  return (
    <section className="section-layout">
      <Container className="project-container">
        <Fade duration={2000}>
          <h2>Bootcamp</h2>
        </Fade>
        <Fade delay={1000} duration={2000}>
          <h3>The Complete 2021 Web Development Bootcamp</h3>
        </Fade>
        <p>
          This bootcamp, through Udemy, is taught by instructor Dr. Angela Yu
          from the App Brewery. There, I was able to sharpen and learn a lot of
          new web development skills.
        </p>
        <Project
          link={projList[0].link}
          title={projList[0].title}
          paragraphs={projList[0].paragraphs}
        />
        <img
          className="full-width"
          src="/images/keeper-app.png"
          alt="The Keeper App home page."
        />
      </Container>
      <Container className="project-container">
        <Project
          link={projList[1].link}
          title={projList[1].title}
          paragraphs={projList[1].paragraphs}
        />
        <TindogImages />
      </Container>
      <Container className="project-container">
        <Project
          link={projList[2].link}
          title={projList[2].title}
          paragraphs={projList[2].paragraphs}
        />
        <SecretsImages />
      </Container>
    </section>
  );
}

export default AppBreweryProjects;
