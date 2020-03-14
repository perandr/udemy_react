import React from "react";

const Person = props => {
  return (
    <div>
      <p>
        I'm {props.name}! Age: {props.age}.
      </p>
      <p>
        <small>{props.children}</small>
      </p>
    </div>
  );
};

export default Person;
