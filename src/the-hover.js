import React, { useEffect, useRef } from "react";
import hoverEffect from "hover-effect";

function TheHover() {
  const container = useRef();

  useEffect(() => {
    new hoverEffect({
      parent: container.current,
      intensity: 0.2,
      image1: "/images/about.jpg",
      image2: "/images/about-2.jpg",
      displacementImage: "/images/dissplace.png",
      imagesRatio: "0.666666"
    });
  }, [container]);

  return (
    <div
      className="about-image-distortion"
      ref={container}
      id="imgContainer"
    />
  );
}

export default TheHover;
