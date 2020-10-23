import React from "react";
import { Link } from "react-router-dom";
import "./ProgramList.scss";

const ProgramListItem = ({ image, title, paragraph, link }) => {
  return (
    <div className="program-list-item">
      <Link to={`/programs/${link}`}>
        <div className="image">
          <img src={image} alt="logo" className="img-fluid" />
        </div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
      </Link>
    </div>
  );
};

export default ProgramListItem;
