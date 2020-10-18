import React from "react";
import "./Ourteam.scss";
import Pix3 from "../../../../assets/img/Pix3.png";
import { IoLogoLinkedin } from "react-icons/io";

const OurteamItem = ({ avatar, name, designation, bio, socialMediahandle }) => {
  return (
    <div className="about-our-team__list--item">
      <div className="user-image border-color-light-blue-1 u-avatar">
        <img src={avatar} alt="user-logo" />
      </div>
      <h4>{name}</h4>
      <span>{designation}</span>
      <p>{bio}</p>
      <IoLogoLinkedin color="#0E76A8" size={24} className="media-handle" />
    </div>
  );
};
const Ourteam = () => {
  return (
    <div className="about-our-team">
      <h2>Our Team</h2>
      <div className="about-our-team__list">
        <OurteamItem
          avatar={Pix3}
          name="Team member’s name"
          designation="Software analyst"
          bio="Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text."
        />
        <OurteamItem
          avatar={Pix3}
          name="Team member’s name"
          designation="Software analyst"
          bio="Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text."
        />
        <OurteamItem
          avatar={Pix3}
          name="Team member’s name"
          designation="Software analyst"
          bio="Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text."
        />

        <OurteamItem
          avatar={Pix3}
          name="Team member’s name"
          designation="Software analyst"
          bio="Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text."
        />
        <OurteamItem
          avatar={Pix3}
          name="Team member’s name"
          designation="Software analyst"
          bio="Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text."
        />
        <OurteamItem
          avatar={Pix3}
          name="Team member’s name"
          designation="Software analyst"
          bio="Short bio about this team member. It has been placed here solely to demonstrate the look and feel of finished, typeset text."
        />
      </div>
    </div>
  );
};
export default Ourteam;
