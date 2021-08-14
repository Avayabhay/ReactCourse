import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const [text, setText] = useState("Abhay");
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";
  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* <h1>{text} is the Text</h1>
      <hr />
      <h1>first Value: {firstValue}</h1>
      <hr />
      <h1>Second Value : {secondValue}</h1> */}
      <hr />
      {/* <h2>{text || "OR CASE"}</h2>
      <h2>{!text && "AND CASE"}</h2> */}

      <button
        type="button"
        className="btn"
        onClick={() => setIsError(!isError)}
      >
        Toggle Error
      </button>
      {isError && <h1>Error..</h1>}

      {isError ? (
        <div>
          <h4>there is an error</h4>
        </div>
      ) : (
        <div>IT is Fine</div>
      )}
    </>
  );
};

export default ShortCircuit;
