import React from "react";

const UserInput = props => {
  return (
    <div>
      <input defaultValue={props.userData} onChange={props.changed} />
    </div>
  );
};

export default UserInput;
