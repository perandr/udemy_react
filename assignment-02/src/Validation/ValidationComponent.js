import React, { useState } from "react";
import "./ValidationComponent.css";

const ValidationComponent = props => {
  const MIN_LENGTH = 5;
  const textLength = props.text.length;

  if (textLength === 0) {
    return null;
  }

  return (
    <span className="ValidationComponent">
      {textLength < MIN_LENGTH ? "Text too short" : "Text long enugth"}
    </span>
  );
};

export default ValidationComponent;
