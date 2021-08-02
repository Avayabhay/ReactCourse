import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";

import { books } from "./books";
import Book from "./Book";

//Declearing vars

function BookList() {
  return (
    <>
      <h2>This is a BookList</h2>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
