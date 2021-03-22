import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <section id="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#title">Josh M</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#title">title</Nav.Link>
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#skills">skills</Nav.Link>
              <Nav.Link href="#projects">projects</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default Header;
