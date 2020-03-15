import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name}! Age: {props.age}.
      </p>
      <p>
        <small>{props.children}</small>
      </p>
      <input onChange={props.changed} defaultValue={props.name} />
    </div>
  );
};

export default Person;
