import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  const [prsonsState, setPersonsState] = useState({
    persons: [
      { name: "Manu", age: 29 },
      { name: "Max", age: 28 },
      { name: "Test", age: 100500 }
    ]
  });

  const switchNameHandler = () => {
    console.log("Was clicked!!");
    // this.state.persons[0].name = "test";
    setPersonsState({
      persons: [
        { name: "Manu", age: 29 },
        { name: "Max", age: 28 },
        { name: "Test", age: 100502 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={switchNameHandler}>change name</button>
      <Person
        name={prsonsState.persons[0].name}
        age={prsonsState.persons[0].age}
      />
      <Person
        name={prsonsState.persons[1].name}
        age={prsonsState.persons[1].age}
      >
        My hobbies: Rasing
      </Person>
      <Person
        name={prsonsState.persons[2].name}
        age={prsonsState.persons[2].age}
      />
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
