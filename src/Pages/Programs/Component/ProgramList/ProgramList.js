import React from "react";
import { Link } from "react-router-dom";
import "./ProgramList.scss";

const ProgramListItem = ({ image, title, paragraph, link, showLinkButton }) => {
  return (
    <div className="program-list-item">
      <Link to={`/programs/${link}`}>
        <div className="image">
          <img src={image} alt="logo" className="img-fluid" />
        </div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
        {showLinkButton && (
          <button className="intro-btn btn1">LEARN MORE</button>
        )}
      </Link>
    </div>
  );
};

export default ProgramListItem;
