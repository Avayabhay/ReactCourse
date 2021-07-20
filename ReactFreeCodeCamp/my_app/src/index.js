import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <React.Fragment>
      <div className="row">
        <h4>THis is my First Component</h4>;
      </div>
      <div>This is a Second Div</div>
    </React.Fragment>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
