import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("Abhay");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h1>{text} is the Text</h1>
      <hr />
      <h1>first Value: {firstValue}</h1>
      <hr />
      <h1>Second Value : {secondValue}</h1>
      <hr />
      <h2>{text || "OR CASE"}</h2>
      <h2>{!text && "AND CASE"}</h2>
    </>
  );
};

export default ShortCircuit;
