import React from "react";
import portfolioImg from "./../images/online-porfolio.png";
import { Container, Row, Col } from "react-bootstrap";
import aslMac from "./../images/mac-al.png";
import macVotre from "./../images/mac-votre.png";
import beatSimple from "./../images/beat-simple.png";
import bwCollex from "./../images/bwcollex.png";
import oceandexter from "./../images/oceandexter.png";

import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <section id="projects" className="section-padding">
      <Container>
        <Fade bottom>
          <h2 id="projects-title">Projects</h2>
        </Fade>
        <Row>
          <Col>
            <a href="https://oceananddexterskitchen.netlify.app/" rel="noreferrer" target="_blank">
              <img
                src={oceandexter}
                className="projects-img"
                alt="Ocean and Dexter's Kitchen"
              />
            </a>
            <h4>Ocean and Dexter's Kitchen</h4>
            <p>
              Ocean and Dexter's Kitchen is a website that consists of
              collections of food video tutorials and recipes featuring Chef
              Ocean Carlisle and his cat assistant Dexter. The web site was also
              built using React.js, HTML, CSS, and JavaScript. This project is
              continuously being worked on has been released.
            </p>
          </Col>
          <Col>
            <a
              href="https://bwcollex.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={bwCollex}
                className="projects-img"
                alt="The Black and White Collection"
              />
            </a>
            <h4>The Black and White Collection</h4>
            <p>
              This is a collection and composition of black and white images
              from various photographers and artists on Unsplash. The purpose of
              this project was to "play" with composition and modern layouts for
              a web page. Some things I experimented with is parallax scrolling
              and positioning of elements using React.js, JavaScript, and CSS.
            </p>
          </Col>
          <Col>
            <a
              href="https://joshm-dev.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={portfolioImg}
                className="projects-img"
                alt="Online Portfolio Home Page"
              />
            </a>
            <h4>Online Portfolio</h4>
            <p>
              This is my online portfolio. I coded this using React.js as my
              front-end framework along with basic HTML/JSX and CSS. For the
              functionality of the contact form, I used Email.js to run that
              feature.
            </p>
          </Col>
          <Col>
            <img
              src={aslMac}
              className="projects-img"
              alt="Astronomical Learning Home Page"
            />
            <h4>Astronomical Learning</h4>
            <p>
              Our team used Agile/Scrum development methods to design and create
              an application that provides information regarding space and space
              travel. Our tech stack involved ASP .NET Framework MVC with
              Identity, C#, JavaScript, HTML(Razor Pages), and CSS. I
              contributed to backlog refinement, sprints (planning, reviews,
              retrospectives), and was also responsible for our Git repository,
              API implmentation, and CI/CD with Azure.
            </p>
          </Col>
          <Col>
            <img
              src={beatSimple}
              className="projects-img"
              alt="Beat Simple Home"
            />
            <h4>Beat Simple</h4>
            <p>
              This project is <b>still in progress.</b> For this small project,
              I decided to upgrade one of the projects I worked on in The
              Complete 2021 Web Development Bootcamp. Instead of using EJS, I
              used the React.js framework. Users are able to play a simple beat
              with the select instruments and sounds that are provided to them
              on Beat Simple.
            </p>
          </Col>
          <Col>
            <img
              src={macVotre}
              className="projects-img"
              alt="Astronomical Learning Home Page"
            />
            <h4>Votre Nome</h4>
            <p>
              This project is <b>still in progress.</b> A lot of people have the
              same names, but they all are different characters. In this web
              application, we gathered data from random people to see how they
              would describe someone with a particular name. We used MongoDB to
              hold our survey data, Express.js, Node.js, and React.js as our
              front-end framework.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
