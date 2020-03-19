import React, { useState } from "react";
import styles from "./App.css";
import Person from "./Person/Person";
// import Radium, { StyleRoot } from "radium";
// import styled from "styled-components";

// const StyledButton = styled.button`

// `;

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

  if (prsonsState.showPersons) {
    persons = (
      <div>
        {prsonsState.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              changed={nameChangedHandler.bind(this, person)}
              click={deletePersonHandler.bind(this, index)}
            />
          );
        })}
      </div>
    );
    // buttonStyle.backgroundColor = "red";
    // buttonStyle[":hover"] = {
    //   backgroundColor: "salmon",
    //   color: "black"
    // };
  }

  const classes = [];
  const btnStyles = [styles.Button];

  if (prsonsState.persons.length <= 2) {
    classes.push("red");
  }
  if (prsonsState.persons.length <= 1) {
    classes.push("bold");
  }

  return (
    <div className={styles.App}>
      <h1>Hello world</h1>
      <p className={classes.join(" ")}>some text</p>
      <button alt={prsonsState.showPersons} onClick={togglePersonsHandler}>
        change name
      </button>
      {persons}
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Manu", age: 29 },
//       { name: "Max", age: 28 },
//       { name: "Test", age: 100500 }
//     ]
//   };

//   switchNameHandler = () => {
//     console.log("Was clicked!!");
//     // this.state.persons[0].name = "test";
//     this.setState({
//       persons: [
//         { name: "Manu", age: 29 },
//         { name: "Max", age: 28 },
//         { name: "Test", age: 100502 }
//       ]
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Hello world</h1>
//         <button onClick={this.switchNameHandler}>change name</button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//         >
//           My hobbies: Rasing
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//   }
// }

// export default App;
