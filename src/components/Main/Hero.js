import React from "react";

//styles
import "../../assets/styles/Hero.css";

//images
import NextIcon from "../../assets/static/coolicon.svg";
import Arrow from "../../assets/static/arrow_bottom.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__principal">
        <article className="hero__text--container">
          <h1>Smartab Max Latab</h1>
        </article>
        <figure className="hero__image--container">
          <img src="" alt="desk-1" />
        </figure>
      </div>

      <article className="hero__paragraph">
        <p>
          Vestibulum ac diam{" "}
          <strong className="strong">sit amet quam vehicula</strong> elementum
          sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi.
        </p>
        <button className="hero__button">
          Pre-ordenar <img className="next__icon" src={NextIcon} alt="" />
        </button>
      </article>
      <button className="arrow__container">
        <img className="arrow" src={Arrow} alt="" />
      </button>
    </div>
  );
};

export default Hero;
