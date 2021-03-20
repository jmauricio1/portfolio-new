import React from 'react';
import '@icons-pack/react-simple-icons';
import LangauageIcons from './language-icons';
import TechnologiesIcons from './technologies-icons';

function Skills(){
    return(
        <section id="skills">
            <h2>Skills</h2>
            <h3>Languages</h3>
            <LangauageIcons />
            <h3>Tools & Technologies</h3>
            <TechnologiesIcons />
        </section>
    );
}

export default Skills;