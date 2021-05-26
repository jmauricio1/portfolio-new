import React, { useState } from "react";
import Particles from "react-tsparticles";

function Home() {
  const first = 1;

  const [applyStyle, setApplyStyle] = useState(0);

  function handleOver(e) {
    setApplyStyle(e.target.id);
  }

  function handleOut(e) {
    setApplyStyle(0);
  }

  let letter = {};

  if (applyStyle != 0) {
    letter = {
      color: "red",
      transform: "scaleY(0.5)",
    };
  }

  let nodeCount = 200;
  if (window.innerWidth <= 414) {
    nodeCount = 100;
  }

  console.log(applyStyle);

  return (
    <section id="home">
      <h1 className="title">
        <span
          id={`${first}`}
          className="allow-pointer"
          style={applyStyle == 1 ? letter : null}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          H
        </span>
        <span
          id="2"
          className="allow-pointer"
          style={applyStyle == 2 ? letter : null}
          onMouseOver={handleOver}
          onMouseOut={handleOut}
        >
          e
        </span>
        llo.
        <br />
        I'm Josh.
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
              },
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
              value: nodeCount,
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
  );
}

export default Home;
