import React from "react";
import "../../assets/styles/Price.css";

const PriceItem = ({ image, price, madein }) => {
  return (
    <figure className="price__item">
      <img className="price__img" src="" alt="desk" />
      <h3>{price}</h3>
      <figcaption>Hecho en {madein}</figcaption>
    </figure>
  );
};

export default PriceItem;
