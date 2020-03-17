import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

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

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={togglePersonsHandler}>change name</button>

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
