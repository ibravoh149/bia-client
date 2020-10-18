import React, { useState } from "react";
import "./Header.scss";
import logo from "../../../assets/img/bai_logo 2.png";
import { TiThMenuOutline } from "react-icons/ti";
import Drawer from "../Drawer/Drawer";
import BackDrop from "../Drawer/BackDrop";
import { Link, useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  const location = useLocation();
  const history = useHistory();
  const activePath = location.pathname;
  const isActivePath = (path) =>
    activePath.toLocaleLowerCase().includes(path.toLocaleLowerCase());
  return (
    <>
      <Drawer show={showDrawer} toggle={toggleDrawer} />
      <BackDrop show={showDrawer} toggle={toggleDrawer} />
      <nav className="header-navigation">
        <div className="header-navigation__logo-container">
          <ul>
            <li className="logo-icon" onClick={() => history.push("/home")}>
              <img src={logo} alt="logo" />
            </li>
            <li className="logo-text" onClick={() => history.push("/home")}>
              BLACK IN AI
            </li>
          </ul>
        </div>
        <div className="header-navigation__nav-list">
          <ul>
            <li>
              <Link
                className={isActivePath("/about") ? "active-link" : ""}
                to="/about"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                className={isActivePath("/programs") ? "active-link" : ""}
                to="/programs"
              >
                PROGRAMS
              </Link>
            </li>
            <li>
              <Link
                className={isActivePath("/membership") ? "active-link" : ""}
                to="/membership"
              >
                MEMBERSHIP
              </Link>
            </li>
            <li>
              <Link
                className={isActivePath("/partnership") ? "active-link" : ""}
                to="/partnership"
              >
                PARTNERSHIP
              </Link>
            </li>
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
