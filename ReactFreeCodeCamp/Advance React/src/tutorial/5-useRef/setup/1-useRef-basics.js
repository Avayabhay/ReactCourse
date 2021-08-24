import React, { Fragment, useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer);
    console.log(refContainer.current.value);
    console.log(divContainer);
    console.log(divContainer.current);
    // console.log(divContainer.current.value);
  };

  useEffect(() => {
    refContainer.current.focus();
  });

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input type="text" ref={refContainer} />
        <button type="submit">Submit</button>
      </form>
      <div ref={divContainer}>This is a Div</div>
    </>
  );
};

export default UseRefBasics;
