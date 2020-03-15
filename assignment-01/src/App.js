import React, { useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  const [userData, setUserData] = useState("");

  const userDataHandler = event => {
    setUserData(event.target.value);
  };
  const [isSelected, setIsSelected] = useState(false);

  const select = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="App">
      <UserOutput userData={userData} select={select} isSelected={isSelected} />
      <UserOutput userData={userData} select={select} isSelected={isSelected} />
      <UserOutput userData={userData} select={select} isSelected={isSelected} />
      <UserInput userData={userData} changed={userDataHandler} />
    </div>
  );
}

export default App;
