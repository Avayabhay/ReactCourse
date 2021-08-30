import React from "react";

const Product = ({ name, price, image }) => {
  return (
    <article className="product">
      <img src={image.url} alt="" />
      <h4>{name}</h4>
      <h4>{price}</h4>
    </article>
  );
};

export default Product;
