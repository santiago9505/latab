import React from "react";

//styles
import "../../assets/styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <article className="hero__text--container">
          <h1>Smartab Max Latab</h1>
        </article>
        <figure className="hero__image--container">
          <img src="" alt="desk-1" />
        </figure>
      </div>

      <article className="hero__paragraph">
        <p>
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
        </p>
        <button className="hero__button">Pre-ordenar</button>
      </article>
      <button>/</button>
    </div>
  );
};

export default Hero;
