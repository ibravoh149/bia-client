import React from "react";
import "./Ourteam.scss";
import { IoLogoLinkedin, IoIosGlobe } from "react-icons/io";

import AyannaHoward from "../../../../assets/img/team/Ayanna_Howard.jpg";
import brandisMarshall from "../../../../assets/img/team/brandeis_marshall.jpg";
import charlesIsbell from "../../../../assets/img/team/Charles isbell.jpg";
import DevinGuillory from "../../../../assets/img/team/devin_guillory.jpg";
import ezinneNwankwo from "../../../../assets/img/team/ezinne_nwankwo.jpg";
import hassanKane from "../../../../assets/img/team/hassan_kane.jpg";
import isaacDonis from "../../../../assets/img/team/isaac_donis.jpg";
import krystalMaughan from "../../../../assets/img/team/krystal_maughan.jpg";
import makindeAdeagbo from "../../../../assets/img/team/makinde_adeagbo.jpeg";
import redietAbebe from "../../../../assets/img/team/rediet_abebe.jpg";
import rodneySampson from "../../../../assets/img/team/rodney_sampson.jpeg";
import sanmiKoyejo from "../../../../assets/img/team/sanmi_koyejo.png";
import timnitGebru from "../../../../assets/img/team/timnit_gebru.jpg";
import habenGirma from "../../../../assets/img/team/haben_girma.jpg";
import joyceWilliams from "../../../../assets/img/team/joyce_williams.jpg";

const OurteamItem = ({
  avatar,
  name,
  designation,
  bio,
  socialMediahandleLink,
  mediaType,
}) => {
  const _mediaType = () => {
    if (mediaType === "web") {
      return <IoIosGlobe color="#0E76A8" size={24} className="media-handle" />;
    } else {
      return (
        <IoLogoLinkedin color="#0E76A8" size={24} className="media-handle" />
      );
    }
  };

  return (
    <div className="about-our-team__list--item">
      <div className="user-image border-color-light-blue-1 u-avatar">
        <img src={avatar} alt="user-logo" />
      </div>
      <h4>{name}</h4>
      {/* <span>{designation}</span> */}
      {/* <p>{bio}</p> */}
      {socialMediahandleLink && (
        <span
          style={{ cursor: "pointer" }}
          onClick={() => window.open(socialMediahandleLink)}
        >
          {_mediaType()}
        </span>
      )}
    </div>
  );
};
const Ourteam = () => {
  return (
    <div className="about-our-team">
      <h2>Our Team</h2>

      <br />
      <br />

      <h3 className="team-cat-heading">Advisory Board</h3>

      <div className="about-our-team__list">
        <OurteamItem
          avatar={charlesIsbell}
          name="Charles Isbell"
          socialMediahandleLink="https://www.linkedin.com/in/charles-isbell-a12b808"
        />

        <OurteamItem
          avatar={brandisMarshall}
          name="Brandeis Marshall"
          socialMediahandleLink="https://www.brandeismarshall.com/"
          mediaType="web"
        />

        <OurteamItem
          avatar={makindeAdeagbo}
          name="Makinde Adeagbo"
          socialMediahandleLink="https://www.linkedin.com/in/makinde"
        />

        <OurteamItem
          avatar={rodneySampson}
          name="Rodney Sampson"
          socialMediahandleLink="https://www.linkedin.com/in/rodneysampson"
        />

        <OurteamItem
          avatar={AyannaHoward}
          name="Ayanna Howard"
          socialMediahandleLink="https://www.linkedin.com/in/ayanna-howard"
        />

        <OurteamItem
          avatar={habenGirma}
          name="Haben Girma"
          socialMediahandleLink="https://www.linkedin.com/in/habengirma"
        />
      </div>

      <br />
      <br />

      <h3 className="team-cat-heading">Black in AI Board</h3>
      <div className="about-our-team__list">
        <OurteamItem
          avatar={timnitGebru}
          name="Timnit Gebru"
          socialMediahandleLink="https://ai.stanford.edu/~tgebru/"
          mediaType="web"
        />

        <OurteamItem
          avatar={redietAbebe}
          name="Rediet Abebe"
          socialMediahandleLink="https://www.cs.cornell.edu/~red/"
          mediaType="web"
        />

        <OurteamItem
          avatar={sanmiKoyejo}
          name="Sanmi Koyejo"
          socialMediahandleLink="https://sanmi.cs.illinois.edu/"
          mediaType="web"
        />

        <OurteamItem
          avatar={ezinneNwankwo}
          name="Ezinne Nwanko"
          socialMediahandleLink="https://www.linkedin.com/in/ezinne-nwankwo-119586101"
        />

        <OurteamItem
          avatar={DevinGuillory}
          name="Devin Guillory"
          socialMediahandleLink="http://www.devinguillory.com/"
          mediaType="web"
        />

        <OurteamItem
          avatar={joyceWilliams}
          name="Joyce Williams"
          // socialMediahandleLink="http://www.devinguillory.com/"
          // mediaType="web"
        />
      </div>

      <br />
      <br />

      <h3 className="team-cat-heading">Community Team</h3>
      <div className="about-our-team__list">
        <OurteamItem
          avatar={hassanKane}
          name="Hassan Kane"
          socialMediahandleLink="https://www.linkedin.com/in/mohamed-hassan-kane-4b50328a/"
        />

        <OurteamItem
          avatar={krystalMaughan}
          name="Krystal Maughan"
          socialMediahandleLink="https://www.linkedin.com/in/krystal-maughan-3563a215"
        />

        <OurteamItem
          avatar={isaacDonis}
          name="Isaac Donis"
          socialMediahandleLink="https://www.linkedin.com/in/isaacdonis"
        />
      </div>
    </div>
  );
};
export default Ourteam;
