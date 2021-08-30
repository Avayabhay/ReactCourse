import React from "react";
import PropTypes from "prop-types";

import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, price, image }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt="" />
      <h4>{name}</h4>
      <h4>${price}</h4>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  name: "default-Name",
  image: defaultImage,
  price: 9.99,
};

export default Product;
