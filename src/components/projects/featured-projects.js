import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AstroImages from "./astro-images";
import BwcImages from "./bwc-images";
import OadkImages from "./ocean-images";

function FeaturedProjects() {
  return (
    <section className="section-layout">
      <Container className="project-container">
        <h2>Featured</h2>
        <h3>Client Work</h3>
        <h4><a href="https://oceananddexterskitchen.netlify.app/">Ocean and Dexter's Kitchen</a></h4>
        <p>
          Ocean and Dexter's Kitchen is a collection of recipes and tutorials
          from the talented Portland, Oregon based chef, Ocean Carlisle.
          Visitors can dive into the methods of his recipes and simply recreate
          his work from home.
        </p>
        <OadkImages />
      </Container>
      <Container>
        <h3>Personal Projects</h3>
        <h4><a href="https://bwcollex.netlify.app/">The Black and White Collection</a></h4>
        <p>
          The Black and White collection is a simple selection of black and
          white images from various photographers and artists on Unsplash. The
          purpose of this project was to explore with parallax scrolling and
          create a compose a layout that would sway towards uncommon yet
          pleasing.
        </p>
      </Container>
      <BwcImages className="project-container" />
      <Container>
        <h4>React Portfolio</h4>
        <p>
          My React portfolio is used to showcase my work, projects, and
          information about myself. Please, don't be afraid to read about myself
          as a developer and view the projects I collaborated on.
        </p>
      </Container>
      <Container fluid className="no-space project-container">
        <Row className="no-space">
          <Col className="no-space" lg={7}>
            <img
              className="contain-full-image"
              alt="Portfolio home page"
              src="/images/portfolio.jpg"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h4>Puppert</h4>
        <p>
          Puppert is a productivity application that tracks the progress of user
          and team created development projects.
          <br />
          <br />
          I have found that other progress tracking applications are complex and
          have many features that are not utilized by many users. Puppert is
          made to have an easy-going user experience while having a
          comprehensive user interface. While on Puppert,
          users are able to track the progress of their projects while
          implementing some Agile methods. This includes the process of creating
          user stories and sprints.
          <br />
          <br />
          "We believe in keeping the planning phase quick and simple so that
          there is more room for your creativity."
        </p>
      </Container>
      <Container fluid className="no-space">
        <Row className="no-space">
          <Col lg={2}>
          </Col>
          <Col lg={2}>
            <img src="/images/Puppert-phone.png" alt="Puppert phone view" className="contain-full-image bwc-phone-bottom" />
          </Col>
          <Col lg={1}></Col>
          <Col lg={7} className="no-space">
          <img src="/images/puppert-1.png" alt="Puppert phone view" className="contain-full-image" />
          </Col>
        </Row>
      </Container>
      <Container>
        <h3>School Projects</h3>
        <h4>Astronomical Learning</h4>
        <p>
          Astronomical Learning is a website for those interested in all things
          space who want to learn more about SpaceX and NASA missions and space
          itself. This project is also an informational system that will allow
          people of all ages to learn about SpaceX, NASA and space in a variety
          of ways.
          <br />
          <br />
          Visitors will be able to see what missions SpaceX and NASA have
          completed and be able to view various information about each mission.
          The website will also include other ways of teaching people about what
          goes into space missions and other aspects of space. Unlike SpaceX’s
          launch manifest, our product will be able to deliver more detailed
          information about SpaceX missions and in a format that is more
          appealing to younger audiences alongside a much larger scope of
          topics.
        </p>
      </Container>
      <Container fluid className="no-space project-container">
      <AstroImages />
      </Container>
    </section>
  );
}

export default FeaturedProjects;
