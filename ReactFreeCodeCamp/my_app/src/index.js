import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <>
      <div className="row">
        <First />
      </div>
      <Second />
    </>
  );
}

const First = () => <h4>THis is my First Component</h4>;
const Second = () => {
  return <div>This is a Second Div</div>;
};

ReactDom.render(<Greeting />, document.getElementById("root"));
