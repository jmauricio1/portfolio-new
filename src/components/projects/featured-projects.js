import React from "react";
import { Container } from "react-bootstrap";
import BwcImages from "./bwc-images";
import OadkImages from "./ocean-images";

function FeaturedProjects() {
  return (
    <section className="section-layout">
      <Container className="project-container">
        <h2>Featured</h2>
        <h3>Client Work</h3>
        <h4>Ocean and Dexter's Kitchen</h4>
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
        <h4>The Black and White Collection</h4>
        <p>
          The Black and White collection is a simple selection of black and
          white images from various photographers and artists on Unsplash. The
          purpose of this project was to explore with parallax scrolling and
          create a compose a layout that would sway towards uncommon yet
          pleasing.
        </p>
      </Container>
      <BwcImages className="project-container" />
      <Container className="project-container">
        <h4>React Portfolio</h4>
        <p>
          My React portfolio is used to showcase my work, projects, and
          information about myself. Please, don't be afraid to view the projects
          I collaborated on and about myself as a developer.
        </p>
      </Container>
      <Container className="project-container">
        <h4>Puppert</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
      <Container>
        <h3>School Projects</h3>
        <h4>Astronomical Learning</h4>
        <p>
          This project is a website focused around teaching younger audiences
          about space related topics including our solar system, the universe,
          and missions conducted by major space related companies such as NASA
          and SpaceX. Our goal is to make the website as interesting and
          engaging as possible to our target audience.
          <br />
          <br />
          For those interested in all things space who want to learn more about
          SpaceX and NASA missions and space itself, the Astronomical Learning
          Website is an informational system that will allow people of all ages
          to learn about SpaceX, NASA and space in a variety of ways. Visitors
          will be able to see what missions SpaceX and NASA have completed and
          be able to view various information about each mission. The website
          will also include other ways of teaching people about what goes into
          space missions and other aspects of space. This will include
          interactive media such as games and quizzes. Unlike SpaceX’s launch
          manifest (https:// www.spacex.com/missions), our product will be able
          to deliver more detailed information about SpaceX missions and in a
          format that is more appealing to younger audiences alongside a much
          larger scope of topics.
        </p>
      </Container>
    </section>
  );
}

export default FeaturedProjects;
