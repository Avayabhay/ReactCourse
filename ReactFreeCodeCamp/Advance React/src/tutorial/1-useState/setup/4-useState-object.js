import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Andrew",
    age: 22,
    message: "This is my Message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "new Message" });
  };
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button type="button" className="btn" onClick={changeMessage}>
        Change the Message
      </button>
    </>
  );
};

export default UseStateObject;
