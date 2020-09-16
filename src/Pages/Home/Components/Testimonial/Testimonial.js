import React from "react";
import "./Testimonial.scss";
import userImage from "../../../../assets/img/Pic4.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      {" "}
      <div className="user-image border-color-white">
        <img src={userImage} alt="user profile" />
      </div>
      <div className="testimonial-container__content-right">
        <p>
          Here’s where the short testimonial of this community member goes, and
          if longer extends to this line.
        </p>
        <h3>Oluwaseyi Abraham</h3>
        <span>AI Researcher, University of Ibadan, Nigeria</span>
        <span style={{ marginTop: "44px" }}>
          <IoIosArrowRoundBack size={20} />
          <IoIosArrowRoundForward color="#1F2421" size={20} />
        </span>
      </div>
    </div>
  );
};
export default Testimonial;
