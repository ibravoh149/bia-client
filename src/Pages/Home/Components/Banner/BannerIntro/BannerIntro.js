import React from "react";
import "./BannerIntro.scss";
import pic1 from "../../../../../assets/img/Pic.png";
import pic2 from "../../../../../assets/img/Picp2.png";
// import { Button, Row, Col } from "reactstrap";

const BannerIntro = () => {
  return (
    <div className="banner-intro-container">
      <div className="banner-intro-container__intro">
        <h2>
          Increasing the presence of black people in the field of artificial
          intelligence.
        </h2>
        <p>
          Black in AI increases the presence and inclusion of Black people in
          the field of AI by creating space for sharing ideas, fostering
          collaborations, mentorship and advocacy.
        </p>
        <div className="banner-intro-container__intro--btn-contaier">
          <button
            className="intro-btn btn1"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/1pv34QhQE74gBnDu2xTdLmMNnWykY5tN2wihWIh7mwrQ/viewform?edit_requested=true"
              )
            }
          >
            BECOME A MEMBER
          </button>
          <button className="intro-btn btn2">PARTNER WITH US</button>
        </div>
      </div>
      <div className="banner-intro-container__images">
        <img
          src={pic1}
          alt="pic one"
          className="banner-intro-container__images--photo p1"
        />
        <img
          src={pic2}
          alt="pic two"
          className="banner-intro-container__images--photo p2"
        />
      </div>
    </div>
  );
};

export default BannerIntro;
