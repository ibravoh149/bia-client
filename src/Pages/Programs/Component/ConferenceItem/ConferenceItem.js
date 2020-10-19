import React from "react";

const ConferenceItem = ({ children }) => {
  return (
    <div>
      <hr className="hr-white" />
      {children}
    </div>
  );
};

export default ConferenceItem;
