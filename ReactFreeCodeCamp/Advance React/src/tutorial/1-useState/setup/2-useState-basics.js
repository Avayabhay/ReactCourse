import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Random Title");
  const handleChange = () => {
    if (text === "Random Title") {
      setText("Hello! The Title Changed!");
    } else {
      setText("Random Title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleChange}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
