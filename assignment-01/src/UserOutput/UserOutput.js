import React from "react";

const UserOutput = props => {
  const TITLE_TEXT = "New text below!";

  const title = text => {
    return <p>{text}</p>;
  };

  return (
    <div onClick={props.select}>
      {props.isSelected ? <b>{title(TITLE_TEXT)}</b> : title(TITLE_TEXT)}
      <p>{props.userData}</p>
    </div>
  );
};

export default UserOutput;
