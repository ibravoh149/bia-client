import React from "react";
import "./ProgramList.scss";

const ProgramListItem = ({ image, title, paragraph }) => {
  return (
    <div className="program-list-item">
      <div className="image">
        <img src={image} alt="logo" className="img-fluid" />
      </div>
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </div>
  );
};

export default ProgramListItem;
