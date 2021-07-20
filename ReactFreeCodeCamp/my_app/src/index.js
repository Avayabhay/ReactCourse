import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <h2>This is a BookList</h2>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/9167i2ioFaS._AC_UY327_FMwebp_QL65_.jpg"
    alt=""
  />
);
const Title = () => (
  <h4>
    Karma: A Yogi's Guide to Crafting Your Destiny NEW YORK TIMES, USA TODAY
  </h4>
);
const Author = () => {
  return <h5>Sadhguru </h5>;
};

// const First = () => <h4>THis is my First Component</h4>;
// const Second = () => {
//   return <div>This is a Second Div</div>;
// };

ReactDom.render(<BookList />, document.getElementById("root"));
