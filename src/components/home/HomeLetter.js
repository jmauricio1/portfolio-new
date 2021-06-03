import React from "react";

function HomeLetter(props) {
  return (
    <span
      // eslint-disable-next-line
      style={props.selectedNum == props.id ? props.style : null}
      className="allow-pointer"
      id={props.id}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      {/* eslint-disable-next-line*/}
      {(props.letter == ` `) ? `${" "}` : props.letter}
    </span>
  );
}

export default HomeLetter;