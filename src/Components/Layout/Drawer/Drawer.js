import React from "react";
import "./Drawer.scss";
import logo from "../../../assets/img/bai_logo 2.png";

const Drawer = ({ show, toggle }) => {
  return (
    <>
      {/* {show ? ( */}
      <div className={`drawer-container ${show ? "show" : ""}`}>
        <div className="drawer-items">
          <ul>
            <li className="logo-icon">
              <img src={logo} alt="logo" />
            </li>
            <li onClick={toggle}>ABOUT</li>
            <li onClick={toggle}>PROGRAMS</li>
            <li onClick={toggle}>MEMBERSHIP</li>
            <li onClick={toggle}>PARTNERSHIP</li>
            <li onClick={toggle} className="nav-list-donate-btn">
              DONATE
            </li>
          </ul>
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
};

export default Drawer;
