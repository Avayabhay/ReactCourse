import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";
//Declearing vars
const title =
  "Karma: A Yogi's Guide to Crafting Your Destiny NEW YORK TIMES, USA TODAY";
const author = "Sadhguru";

function BookList() {
  return (
    <>
      <h2>This is a BookList</h2>
      <section className="booklist">
        <Book />
      </section>
    </>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/9167i2ioFaS._AC_UY327_FMwebp_QL65_.jpg"
        alt=""
      />
      <h4>{title}</h4>
      <h5> {author.toUpperCase()} </h5>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
