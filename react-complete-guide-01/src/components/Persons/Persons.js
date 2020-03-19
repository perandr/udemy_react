import React from "react";
import Person from "./Person/Person";

const Persons = props => {
  return (
    <div>
      {props.persons.map((person, index) => {
        return (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            changed={props.changed.bind(this, person)}
            click={props.clicked.bind(this, index)}
          />
        );
      })}
    </div>
  );
};

export default Persons;
