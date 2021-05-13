import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="section-layout">
      <h2 id="about-title">
        I develop web apps <br /> & software
      </h2>
      <img id="about-img" src="/images/about.jpg" alt="temp" />
      <Container>
        <h3>About</h3>
        <h4>
          "In some ways, programming is like painting. You start with a blank
          canvas and certain basic raw materials. You use a combination of
          science, art, and craft to determine what to do with them." - Andrew
          Hunt
        </h4>
        <p>
          Hello, I'm Josh! I'm an aspiring developer with years of experience in
          developing software and web applications. I received my Bachelor of
          Science degree in Computer Science from Western Oregon University in
          2020. Post-graduation, I was also able to work towards and earn my
          certificate of completion from The Complete 2021 Web Development
          Bootcamp instructed by Dr. Angela Yu with the App Brewery. Since then,
          I have been involved in coding communities such as FreeCodeCamp and
          the App Brewery providing help to those learning software and web
          development.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
    </section>
  );
}

export default About;
