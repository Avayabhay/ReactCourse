import React from "react";

const Book = (props) => {
  const { img, title, author, children } = props;
  const showHelloWorld = (e) => {
    console.log(e);
    return alert("Hello world From a Function!");
  };

  const showAuthor = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onClick={() => {
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

export default Book;
