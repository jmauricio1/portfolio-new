import React from 'react';
import Particles from 'react-tsparticles';

function Home(){
  return(
    <section id="home">
      <h1 className="title">
        Hello. <br /> I'm Josh.
      </h1>
      <Particles
        id="tsparticles"
        className="particles-canvas"
        options={{
          background: {
            color: {
              value: "#FFF",
            },
          },
          fpsLimit: 144,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 20,
                color: "#0075f2",
              },
              push: {
                quantity: 2,
              }
            },
          },
          particles: {
            color: {
              value: "#000",
            },
            links: {
              color: "#000",
              distance: 125,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                value_area: 800,
              },
              value: 200,
            },
            opacity: {
              value: 0.75,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
    </section>
  )
}

export default Home;