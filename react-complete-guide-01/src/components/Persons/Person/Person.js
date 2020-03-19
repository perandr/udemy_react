import React from "react";
import styles from "./Person.module.css";
// import styled from "styled-components";

const Person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click}>
        I'm {props.name}! Age: {props.age}.
      </p>
      <p>
        <small>{props.children}</small>
      </p>
      <input onChange={props.changed} defaultValue={props.name} width="80%" />
    </div>
  );
};

export default Person;
