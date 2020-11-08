import React, { useState } from "react";
import "./Header.scss";
import logo from "../../../assets/img/bai_logo 2.png";
import { TiThMenuOutline } from "react-icons/ti";
import Drawer from "../Drawer/Drawer";
import BackDrop from "../Drawer/BackDrop";
import { Link, useHistory, useLocation } from "react-router-dom";
import { isActivePath } from "../../../util/helper";

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  const location = useLocation();
  const history = useHistory();
  const activePath = location.pathname;

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
                className={`${
                  isActivePath(activePath, "/about") ? "active-link" : ""
                }`}
                to="/about"
              >
                ABOUT
              </Link>
            </li>
            <li className="dropdown">
              <Link
                className={`dropdown-toggle ${
                  isActivePath(activePath, "/programs") ? "active-link" : ""
                }`}
                to="/programs"
                role="button"
                data-toggle="dropdown"
                id="navbarDropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PROGRAMS
              </Link>
              {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item">Action</a>
                <a className="dropdown-item">Another action</a>
                <a className="dropdown-item">Something else here</a>
              </div> */}
            </li>
            <li>
              <Link
                className={`${
                  isActivePath(activePath, "/membership") ? "active-link" : ""
                }`}
                to="/membership"
              >
                MEMBERSHIP
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  isActivePath(activePath, "/partnership") ? "active-link" : ""
                }`}
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
