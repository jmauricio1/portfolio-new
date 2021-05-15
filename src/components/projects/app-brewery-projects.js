import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AppBreweryProjects() {
  return (
    <section className="section-layout">
      <Container className="project-container">
        <h2>Bootcamp</h2>
        <h3>The Complete 2021 Web Development Bootcamp</h3>
        <p>
          This bootcamp, through Udemy, is taught by instructor Dr. Angela Yu
          from the App Brewery. There, I was able to sharpen and learn a lot of
          new web development skills.
        </p>
        {/* <Row lg={4}>
          {info.bootcampSkills.map((skill) => {
            return (
              <Col>
                <i>{skill}</i>
              </Col>
            );
          })}
        </Row> */}
        <h4>Keeper App</h4>
        <p>
          The Keeper App is a simplified clone of Google Keep. The main purpose
          of creating this application was to sharpen my skills on some key
          concepts in React.js. Some core concepts that I was able to practice
          during the creation of this project was event handling, state
          management with React Hooks, array functions, forms, and spread
          operators.
        </p>
        <img
          className="contain-full-image"
          src="/images/keeper-app.png"
          alt="The Keeper App home page."
        />
      </Container>
      <Container>
        <h4>TinDog</h4>
        <p>
          The main idea behind TinDog was to make a Tinder for Dogs. The goal in
          this project was to recreate the TinDog landing page from a design of
          the page while implementing Bootstrap components. In practicing
          front-end development for this project, I was able to improve my
          skills with HTML and CSS.
        </p>
      </Container>
      <Container className="project-container">
        <Row>
          <Col lg={12}>
            <img
              className="contain-full-image"
              src="/images/tindog1.png"
              alt="TinDog"
            />
          </Col>
          <Col lg={12}>
            <img
              className="contain-full-image"
              src="/images/tindog2.png"
              alt="TinDog"
            />
            <p></p>
          </Col>
          <Col lg={12}>
            <img
              className="contain-full-image"
              src="/images/tindog3.png"
              alt="TinDog"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h4>Secrets App</h4>
        <p>
          The Secrets App is an application where users can share information
          anonymously.
          <br />
          <br />
          The goal of this project was to practice many server-side aspects such
          as connecting to MongoDB using Mongoose, user authentication and
          third-party logins with using Passport.js, and different ways to hash
          user passwords.
        </p>
      </Container>
      <Container className="project-container">
        <Row className="no-space">
          <Col lg={6}>
            <img
              className="contain-full-image"
              src="/images/secrets-1.png"
              alt="Secrets home page"
            />
          </Col>
          <Col lg={6}>
            {" "}
            <img
              className="contain-full-image"
              src="/images/secrets-2.png"
              alt="Secrets home page"
            />
          </Col>
          <Col lg={12}>
            {" "}
            <img
              className="contain-full-image"
              src="/images/secrets-3.png"
              alt="Secrets home page"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppBreweryProjects;
