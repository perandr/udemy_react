import React, { useState } from "react";
import styles from "./App.module.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

const App = props => {
  const [prsonsState, setPersonsState] = useState({
    persons: [
      { id: "1", name: "Manu", age: 29 },
      { id: "2", name: "Max", age: 28 },
      { id: "3", name: "Test", age: 100500 }
    ],
    showPersons: false
  });

  const deletePersonHandler = personIndex => {
    console.log("Index: " + personIndex);
    const newPersonsState = { ...prsonsState };
    newPersonsState.persons = newPersonsState.persons.filter(
      (p, index) => index !== personIndex
    );
    setPersonsState(newPersonsState);
  };

  const nameChangedHandler = (person, event) => {
    const newPrsonsState = { ...prsonsState };
    const newPerson = newPrsonsState.persons.find(p => p.id === person.id);
    newPerson.name = event.target.value;
    setPersonsState(newPrsonsState);
  };

  const togglePersonsHandler = () => {
    const newPrsonsState = { ...prsonsState };
    newPrsonsState.showPersons = !prsonsState.showPersons;
    setPersonsState(newPrsonsState);
  };

  let persons = null;

  const btnStyles = [styles.Button];

  if (prsonsState.showPersons) {
    persons = (
      <Persons
        persons={prsonsState.persons}
        clicked={deletePersonHandler}
        changed={nameChangedHandler}
      />
    );

    btnStyles.push(styles.Red);
  }

  return (
    <div className={styles.App}>
      <Cockpit
        persons={prsonsState.persons}
        showPersons={prsonsState.showPersons}
        clicked={togglePersonsHandler}
      />
      {persons}
    </div>
  );
};

export default App;
