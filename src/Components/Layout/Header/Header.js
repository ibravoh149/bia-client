import React, { useState } from "react";
import "./Header.scss";
import logo from "../../../assets/img/bai_logo 2.png";
import { TiThMenuOutline } from "react-icons/ti";
import Drawer from "../Drawer/Drawer";
import BackDrop from "../Drawer/BackDrop";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <>
      <Drawer show={showDrawer} toggle={toggleDrawer} />
      <BackDrop show={showDrawer} toggle={toggleDrawer} />
      <nav className="header-navigation">
        <div className="header-navigation__logo-container">
          <ul>
            <li className="logo-icon">
              <img src={logo} alt="logo" />
            </li>
            <li className="logo-text">BLACK IN AI</li>
          </ul>
        </div>
        <div className="header-navigation__nav-list">
          <ul>
            <li>ABOUT</li>
            <li>PROGRAMS</li>
            <li>MEMBERSHIP</li>
            <li>PARTNERSHIP</li>
            <li className="nav-list-donate-btn">DONATE</li>
          </ul>
        </div>
        <div className="drawer-btn" onClick={toggleDrawer}>
          <TiThMenuOutline size={30} />
        </div>
      </nav>
    </>
  );
};

export default Header;
