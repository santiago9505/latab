import React from "react";
import PriceItem from "./PriceItem";

//styles
import "../../assets/styles/Price.css";

const Price = () => {
  return (
    <div className="price">
      <article className="price__text--container">
        <h1 className="prices__title">Kick Start Your Product With Us</h1>
        <p className="price__paragraph">
          We will deliver the best job with the best team
        </p>
      </article>
      <section className="comparative__section">
        <PriceItem price="$598 USD" madein="COLOMBIA" />
        <PriceItem price="$1259 USD" madein="USA" />
        <PriceItem price="$1300 USD" madein="EUROPA" />
      </section>
    </div>
  );
};

export default Price;
