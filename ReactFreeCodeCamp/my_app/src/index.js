import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";
//Declearing vars
const firstBook = {
  img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
  title: "Ikigai: The Japanese secret to a long and happy life",
  author: "Héctor García and Francesc Miralles",
};
const secondBook = {
  img: "https://m.media-amazon.com/images/I/81YPgi4vpDL._AC_UY327_FMwebp_QL65_.jpg  ",
  title:
    "The Book Thief: The life-affirming number one international bestseller",
  author: "Markus Zusak ",
};

function BookList() {
  return (
    <>
      <h2>This is a BookList</h2>
      <section className="booklist">
        <Book
          img={firstBook.img}
          author={firstBook.author}
          title={firstBook.title}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            iusto, cum assumenda expedita eligendi pariatur, ipsam cumque
            consequuntur atque adipisci ad! Non quaerat consequuntur laboriosam
            incidunt natus eaque tempora quos consectetur voluptate, quis
            dignissimos illo amet minima explicabo. Itaque, dicta?
          </p>
        </Book>
        <Book
          img={secondBook.img}
          author={secondBook.author}
          title={secondBook.title}
        />
      </section>
    </>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <h5> {author} </h5>
      {props.children}
      {/* <h2>{props.job}</h2> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
