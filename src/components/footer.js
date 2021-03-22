import React from "react";
import {Container} from 'react-bootstrap';

function Footer() {
  return (
    <section id="footer" className="text-white">
      <Container>
      <a href="https://www.linkedin.com/in/joshuajacobmauricio/"><i class="fab fa-linkedin"></i></a><a href="https://github.com/jmauricio1"><i class="fab fa-github"></i></a><a href="https://www.instagram.com/josh.log/"><i class="fab fa-instagram-square"></i></a>
        <p>&copy; Joshua Jacob Mauricio</p>
      </Container>
    </section>
  );
}

export default Footer;
