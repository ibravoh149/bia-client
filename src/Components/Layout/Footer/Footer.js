import React from "react";
import "./Footer.scss";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const FooterColumn = ({ title, children, titleSize }) => {
  return (
    <div className="footer-container__top--column">
      <h1 className="column-title" style={{ fontSize: titleSize || "14px" }}>
        {title}
      </h1>
      {children}
    </div>
  );
};

const Footer = () => {
  const location = useLocation();
  // const history = useHistory();
  const activePath = location.pathname;
  const isActivePath = (path) =>
    activePath.toLocaleLowerCase().includes(path.toLocaleLowerCase());
  return (
    <footer className="footer-container">
      <section className="footer-container__top">
        <FooterColumn title="BLACK IN AI">
          <p className="footer-p">
            Increasing the presence of black people in the field of artificial
            intelligence.
          </p>
          <button className="intro-btn btn3">DONATE</button>
        </FooterColumn>

        <FooterColumn title="CONTACT US">
          <p className="footer-p">555 Bryant St #708, Palo Alto, CA 94301.</p>
          <p className="footer-p">
            <a
              href="#0"
              target="_blank"
              className="contact-link"
              rel="noopener noreferrer"
            >
              info@blackinai.org
            </a>
          </p>

          <span>
            <span
              style={{ marginRight: "24px", cursor: "pointer" }}
              onClick={() => window.open("https://www.facebook.com/blackinai")}
            >
              <FaFacebook size={25} />
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => window.open("https://twitter.com/black_in_ai")}
            >
              <IoLogoTwitter size={25} />
            </span>
          </span>
        </FooterColumn>
        <FooterColumn title="LINKS">
          <ul className="footer-link-list">
            <li>
              <Link
                className={isActivePath("/about") ? "active-link" : ""}
                to="/about"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className={isActivePath("/programs") ? "active-link" : ""}
                to="/programs"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                className={isActivePath("/membership") ? "active-link" : ""}
                to="/membership"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                className={isActivePath("/partnership") ? "active-link" : ""}
                to="/partnership"
              >
                Partnership
              </Link>
            </li>
          </ul>
        </FooterColumn>
        <FooterColumn title="GET UPDATES">
          <p className="footer-p">
            Sign up for our newsletter to get updates on our work.
          </p>
          <form className="footer-form-container">
            <input
              type="text"
              className="footer-form-field"
              placeholder="Your email address"
            />
            <div className="intro-btn btn2 foot-btn">SUBSCRIBE</div>
          </form>
        </FooterColumn>
      </section>
      <section className="footer-container__bottom"></section>
      <p className="copy-right">© 2020 Black in AI</p>
    </footer>
  );
};

export default Footer;
