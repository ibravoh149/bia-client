import React from "react";
import "./BannerInfo.scss";
import userImage from "../../../../../assets/img/timnit_gebru.jpg";

const BannerInfo = () => {
  return (
    <div className="banner-info-container">
      <h1>
        Removing barriers to the sustained existence of black ai innovators.
      </h1>
      <div className="banner-info-container__info">
        <div className="banner-info-container__info--left">
          <p>
            Without diversity in our set of researchers, we are not going to
            address problems faced by the majority of people in the world. Black
            in AI’s projects addresses the dire lack of Black professionals in
            the field of artificial intelligence (AI), and the lack of
            visibility and support for those who are already in the field,
            leading them to leave or not realize their full potential.{" "}
          </p>
          <div>
            <button className="intro-btn btn2">
              LEARN MORE ABOUT OUR WORK
            </button>
          </div>
        </div>

        <div className="banner-info-container__info--right">
          <div className="user-image border-color1">
            <img src={userImage} alt="user profile" />
          </div>
          <h3>Timnit Gebru</h3>
          <span>Co-founder, Black in AI</span>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
