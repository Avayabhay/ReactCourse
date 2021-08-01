import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";
//Declearing vars

const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García and Francesc Miralles",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY327_FMwebp_QL65_.jpg  ",
    title:
      "The Book Thief: The life-affirming number one international bestseller",
    author: "Markus Zusak ",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81NDdnVUVkL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Success Secrets of Amazon",
    author: "Steve Anderson ",
  },
];

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

const showHelloWorld = (e) => {
  console.log(e);
  return alert("Hello world From a Function!");
};

const showAuthor = (author) => {
  console.log(author);
};

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h5> {author} </h5>

      <button type="button" onClick={showHelloWorld}>
        Show Hello World!
      </button>
      <button
        type="button"
        onClick={() => {
          return showAuthor(author);
        }}
      >
        Show the Name of the Author
      </button>
      {children}
      {/* <h2>{props.job}</h2> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
