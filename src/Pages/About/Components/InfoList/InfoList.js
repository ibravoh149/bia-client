import React from "react";
import "./InfoList.scss";

const InfoListItem = ({ title, paragragh }) => {
  return (
    <div className="info-list-container__item">
      <h3>{title}</h3>
      <p>{paragragh}</p>
    </div>
  );
};

const InfoList = () => {
  return (
    <div className="info-list-container">
      <InfoListItem
        title="2017"
        paragragh="BAI was founded in 2017 to challenge the status quo."
      />
      <InfoListItem
        title="3000"
        paragragh="We’ve grown from a small facebook group to a global movement comprising 3000 community members & allies who believe that more black people should shape the direction of the field of AI."
      />
      <InfoListItem
        title="10+"
        paragragh="Number of workshops held or some other metric that shows how far we’ve come."
      />
      <InfoListItem
        title="40x"
        paragragh="We have increased the number of Black people participating in major AI conferences globally by orders of magnitude through advocacy, financial aid and our workshop."
      />
    </div>
  );
};
export default InfoList;
