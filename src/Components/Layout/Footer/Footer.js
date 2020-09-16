import React from "react";
import "./Footer.scss";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";

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
  return (
    <footer className="footer-container">
      <section className="footer-container__top">
        <FooterColumn title="BLACK IN AI">
          <p className="footer-p">
            Short sentence stating the nature of the organization e.g.
            tax-exempt, non-profit and possibly registration number.
          </p>
          <button className="intro-btn btn3">DONATE</button>
        </FooterColumn>

        <FooterColumn title="CONTACT US">
          <p className="footer-p">
            Physical address, if available will go right here.
          </p>
          <p className="footer-p">abc@blackinai.org</p>
          <span>
            <span style={{ marginRight: "24px" }}>
              {" "}
              <FaFacebook size={25} />
            </span>
            <span>
              <IoLogoTwitter size={25} />
            </span>
          </span>
        </FooterColumn>
        <FooterColumn title="LINKS">
          <ul className="footer-link-list">
            <li>About us</li>
            <li>Programs</li>
            <li>Mentorship</li>
            <li>Partnership</li>
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
    </footer>
  );
};

export default Footer;
