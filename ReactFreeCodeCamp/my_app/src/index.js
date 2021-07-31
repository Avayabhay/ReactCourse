import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";
//Declearing vars
const names = ["Abhay", "Andrew", "James"];
const newNames = names.map((name) => {
  console.log(name);
  return <h1>{name}</h1>;
});
const books = [
  {
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Ikigai: The Japanese secret to a long and happy life",
    author: "Héctor García and Francesc Miralles",
  },
  {
    img: "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY327_FMwebp_QL65_.jpg  ",
    title:
      "The Book Thief: The life-affirming number one international bestseller",
    author: "Markus Zusak ",
  },
];

function BookList() {
  return (
    <>
      <h2>This is a BookList</h2>
      <section className="booklist">{newNames}</section>
    </>
  );
}

const Book = (props) => {
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h5> {author} </h5>
      {children}
      {/* <h2>{props.job}</h2> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
