import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="section-layout">
      <h2 id="about-title">
        I develop web apps <br /> & software
      </h2>
      <img id="about-img" src="/images/temp-about.jpg" alt="temp"/>
      <Container>
        <h3>About</h3>
        <h4>
          "This is a quote that of something that I believe in and it will be
          included sooner or later" - Some Person
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum
          leo vel orci porta non pulvinar neque laoreet suspendisse. Tellus
          pellentesque eu tincidunt tortor aliquam nulla. Nullam non nisi est
          sit amet facilisis magna etiam tempor.
          <br />
          <br />
          Sapien pellentesque habitant morbi tristique senectus et netus. Sapien
          et ligula ullamcorper malesuada. Consequat id porta nibh venenatis
          cras sed felis eget velit. Arcu odio ut sem nulla pharetra diam sit
          amet.
          <br />
          <br />
          Ultrices in iaculis nunc sed augue. Aliquet porttitor lacus luctus
          accumsan. Ut placerat orci nulla pellentesque. At quis risus sed
          vulputate odio ut enim blandit.
        </p>
      </Container>
    </section>
  );
}

export default About;
