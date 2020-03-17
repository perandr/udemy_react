import React from "react";
import "./UserOutput.css";

const UserOutput = props => {
  const TITLE_TEXT = "Entered user data";

  const title = text => {
    return <p>{text}</p>;
  };

  return (
    <div onClick={props.select} className="UserOutput">
      {props.isSelected ? <b>{title(TITLE_TEXT)}</b> : title(TITLE_TEXT)}
      <p>{props.userData}</p>
    </div>
  );
};

export default UserOutput;
