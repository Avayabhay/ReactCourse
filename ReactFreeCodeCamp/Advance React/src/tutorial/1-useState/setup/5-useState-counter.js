import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
    setValue(0);
  };

  const complexDecrease = () => {
    setTimeout(() => {
      // setValue(value - 1);       //SetValue is Asynchrounous Function
      setValue((prevValue) => {
        return prevValue - 1;
      });
    }, 2000);
  };
  return (
    <>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrease
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>

      <h2>Complex Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexDecrease}>
        Decrease
      </button>
    </>
  );
};

export default UseStateCounter;
