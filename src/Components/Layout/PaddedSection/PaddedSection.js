import React from "react";
import "./PaddedSection.scss";
import PropTypes from "prop-types";

const PaddedSection = ({ children, style }) => {
  return (
    <section className="padded-section" style={{ ...style }}>
      {children}
    </section>
  );
};

PaddedSection.propTypes = {
  style: PropTypes.shape({
    marginTop: PropTypes.string,
    backgroundColor: PropTypes.string,
    marginBottom: PropTypes.string,
  }),
};

export default PaddedSection;
