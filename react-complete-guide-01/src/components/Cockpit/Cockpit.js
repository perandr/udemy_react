import React from "react";
import styles from "./Cockpit.module.css";

const Cockpit = props => {
  const classes = [];
  let btnStyles = [styles.Button];

  if (props.showPersons) {
    btnStyles.push(styles.Red);
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div className={styles.Cockpit}>
      <h1>Hello world</h1>
      <p className={classes.join(" ")}>some text</p>
      <button className={btnStyles.join(" ")} onClick={props.clicked}>
        change name
      </button>
    </div>
  );
};

export default Cockpit;
