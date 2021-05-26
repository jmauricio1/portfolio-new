import React from "react";

function HomeLetter(props) {
  return (
    <span
      style={props.selectedNum == props.id ? props.style : null}
      className="allow-pointer"
      id={props.id}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      {props.letter}
    </span>
  );
}

export default HomeLetter;