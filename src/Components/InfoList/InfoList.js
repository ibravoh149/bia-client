import React from "react";
import "./InfoList.scss";
import PropTypes from "prop-types";

const InfoListItem = ({ title, paragragh, titleColor, paragraghColor }) => {
  return (
    <div className="info-list-container__item">
      <h3 style={{ color: titleColor }}>{title}</h3>
      <p style={{ color: paragraghColor }}>{paragragh}</p>
    </div>
  );
};

const InfoList = ({ content }) => {
  return (
    <div className="info-list-container">
      {content &&
        content.length > 0 &&
        content.map((c) => {
          return (
            <InfoListItem
              title={c.title}
              paragragh={c.paragragh}
              titleColor={c.titleColor}
              paragraghColor={c.paragraghColor}
            />
          );
        })}
    </div>
  );
};

InfoList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.any,
      paragragh: PropTypes.string,
      paragraghColor: PropTypes.string,
      titleColor: PropTypes.string,
    })
  ),
};
export default InfoList;
