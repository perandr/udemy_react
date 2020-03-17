import React from "react";
import "./CharComponent.css";

const CharComponent = props => {
  return (
    <p className="CharComponent" onClick={props.clicked}>
      Char: {props.char}
    </p>
  );
};

export default CharComponent;
