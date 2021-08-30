import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";
import defaultImage from "../../../assets/default-image.jpeg";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
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

export default Index;
