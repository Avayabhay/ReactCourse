import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const changeSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", changeSize);

    return () => {
      console.log("CleanUp");
      window.removeEventListener("resize", changeSize);
    };
  });
  return (
    <>
      <h2>useEffect cleanup</h2>
      <h1>{size} PX</h1>
    </>
  );
};

export default UseEffectCleanup;
