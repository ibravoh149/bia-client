import React from "react";
import "./Drawer.scss";
import logo from "../../../assets/img/bai_logo 2.png";
import { Link, useLocation } from "react-router-dom";
import { isActivePath } from "../../../util/helper";

const Drawer = ({ show, toggle }) => {
  const location = useLocation();
  const activePath = location.pathname;

  return (
    <>
      <div className={`drawer-container ${show ? "show" : ""}`}>
        <div className="drawer-items">
          <ul>
            <li className="logo-icon">
              <img src={logo} alt="logo" />
            </li>
            <li>
              <Link
                className={
                  isActivePath(activePath, "/about") ? "active-link" : ""
                }
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActivePath(activePath, "/programs") ? "active-link" : ""
                }
                to="/programs"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActivePath(activePath, "/membership") ? "active-link" : ""
                }
                to="/membership"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                className={
                  isActivePath(activePath, "/partnership") ? "active-link" : ""
                }
                to="/partnership"
              >
                Partnership
              </Link>
            </li>
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
