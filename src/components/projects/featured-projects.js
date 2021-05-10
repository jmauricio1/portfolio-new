import React from "react";
import { Container } from "react-bootstrap";
import BwcImages from "./bwc-images";
import OadkImages from './ocean-images';

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
      <BwcImages />
    </section>
  );
}

export default FeaturedProjects;
