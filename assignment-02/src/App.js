import React, { useState } from "react";
import "./App.css";
import ValidationComponent from "./Validation/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  const [text, setText] = useState("");
  const inputRef = React.createRef();

  const textChangedHandler = event => {
    setText(event.target.value);
  };

  const clickedHandler = (index, event) => {
    setText([...text.slice(0, index), ...text.slice(index + 1)].join(""));
  };

  return (
    <div className="App">
      <input onChange={textChangedHandler} ref={inputRef} value={text}></input>
      <p>
        Text: {text} <ValidationComponent text={text} />
      </p>
      {[...text].map((ch, index) => (
        <CharComponent
          key={index}
          char={ch}
          clicked={clickedHandler.bind(this, index)}
        />
      ))}
    </div>
  );
}

export default App;
