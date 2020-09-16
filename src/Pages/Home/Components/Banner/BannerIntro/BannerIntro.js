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
          A short leading intro <br /> sentence about you.
        </h2>
        <p>
          It has been placed here solely to demonstrate the look and feel of
          finished, typeset text and its only for show so she who searches for
          meaning here will be sorely disappointed.
        </p>
        <div className="banner-intro-container__intro--btn-contaier">
          <button className="intro-btn btn1">BECOME A MEMBER</button>
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
