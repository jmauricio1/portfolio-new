import React from 'react';
import {Container} from 'react-bootstrap'

function Title(){
    return(
        <section id="title" className="full-height">
            <Container fluid>
                <h1 id="title-name">Hello, I'm Josh!</h1>
                <p id="title-desc">A Software Developer</p>
                <i class="fas fa-arrow-circle-down"></i>
            </Container>
        </section>
    );
}

export default Title;