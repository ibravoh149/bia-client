import React from "react";

const BackDrop = ({ show, toggle }) => {
  return (
    <>{show ? <div className="back-drop" onClick={toggle}></div> : null}</>
  );
};
export default BackDrop;
