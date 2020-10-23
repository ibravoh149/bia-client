import React from "react";
import { Row, Col } from "reactstrap";
import "./Partnership.scss";
import Layout from "../../Components/Layout";
import image2 from "../../assets/img/Image-2.png";
import amazon from "../../assets/img/amazon 1.png";
import goggle from "../../assets/img/google 1.png";
import uber from "../../assets/img/uber 1.png";
import apple from "../../assets/img/path4.png";
import intel from "../../assets/img/intel 1.png";
import vector from "../../assets/img/vector_institute 1.png";
import element from "../../assets/img/element_ai 1.png";
import pinterest from "../../assets/img/pinterest 1.png";
import salesforce from "../../assets/img/salesforce 1.png";
import rockerfeller from "../../assets/img/rockefeller_foundation 1.png";
import ibm from "../../assets/img/ibm 1.png";
import etsy from "../../assets/img/etsy_logo 1.png";
import macauthur from "../../assets/img/macarthur_foundation 1.png";
import nvidia from "../../assets/img/path21.png";
import deepminded from "../../assets/img/deepmind-removebg-preview 1.png";
import facebook from "../../assets/img/facebook 1.png";

import northwestern from "../../assets/img/northwestern 1.png";
import berkeley from "../../assets/img/berkeley 1.png";
import harvard from "../../assets/img/harvard 1.png";
import stanford from "../../assets/img/stanford 1.png";
import gatech from "../../assets/img/gatech 1.png";
import mit from "../../assets/img/mit 1.png";
import cornell from "../../assets/img/cornell-logo-3 1.png";
import uiuc from "../../assets/img/uiuc 1.png";
import mila from "../../assets/img/mila 1.png";
import rutgers from "../../assets/img/rutgers 1.png";
import mcgill from "../../assets/img/mcgill 1.png";
import duke_logo from "../../assets/img/duke_logo 1.png";

import PaddedSection from "../../Components/Layout/PaddedSection/PaddedSection";

const PartnershipPage = (props) => {
  const parnerIcons = [
    amazon,
    goggle,
    uber,
    apple,
    intel,
    vector,
    element,
    pinterest,
    salesforce,
    rockerfeller,
    ibm,
    etsy,
    macauthur,
    nvidia,
    deepminded,
    facebook,
  ];

  const institutionalPartnersIcon = [
    northwestern,
    berkeley,
    harvard,
    stanford,
    gatech,
    mit,
    cornell,
    uiuc,
    mila,
    rutgers,
    mcgill,
    duke_logo,
  ];
  const _breakInChunck = (list, chunkSize = 4) => {
    let listChunk = [];
    for (let i = 0; i < list.length; i += chunkSize) {
      listChunk.push(list.slice(i, i + chunkSize));
    }
    return listChunk;
  };
  return (
    <Layout {...props}>
      <PaddedSection>
        <Row className="">
          <Col
            md={6}
            sm={12}
            lg={6}
            style={{ alignSelf: "center" }}
            className="partnership-quick-info"
          >
            <h4>Become a sponsor of Black in AI.</h4>
            <p>
              As a sponsor, you will have the utmost impact on various areas of
              our organization.
            </p>
          </Col>

          <Col md={6} sm={12} lg={6}>
            <img src={image2} alt="logo1" className="img-fluid" />
          </Col>
        </Row>
      </PaddedSection>

      <div className="partnership-middle-content">
        <PaddedSection>
          <div className="partnership-network">
            <Row>
              <Col
                md={6}
                lg={6}
                sm={12}
                className="partnership-network__left-content"
              >
                <h2 className="partnership-network__heading">
                  Be part of our network.
                </h2>

                <button className="intro-btn btn2">PARTNER WITH US</button>
              </Col>
              <Col
                md={6}
                lg={6}
                sm={12}
                className="partnership-network__right-content"
              >
                <>
                  <h3>Diamond & Platinum Sponsors:</h3>
                  <ul>
                    <li>Recruitment booth at the workshop.</li>
                    <li>Access to attendees opt-in resume booklet.</li>
                    <li>
                      Promotional materials of your organization shown during
                      our workshop proceedings.
                    </li>
                    <li>Logo displayed on our website.</li>
                  </ul>
                </>
                <br />

                <>
                  <h3>Gold & Silver Sponsors:</h3>
                  <ul>
                    <li>Access to attendees opt-in resume booklet.</li>
                    <li>
                      Swags and promotional materials of your organization.
                    </li>
                    <li>Logo displayed on our website.</li>
                  </ul>
                </>
                <br />

                <>
                  <h3>Bronze Sponsor:</h3>
                  <ul>
                    <li>Access to attendees opt-in resume booklet.</li>
                    <li>Logo displayed on our website.</li>
                  </ul>
                </>
              </Col>
            </Row>
          </div>
        </PaddedSection>
      </div>

      <PaddedSection>
        <div className="current-partners">
          <h1>Current partners</h1>
          <h3>Corporate partners</h3>
          <br />

          {_breakInChunck(parnerIcons, 6).map((chunk) => {
            return (
              <div className="parner-gallery">
                {chunk.map((i) => {
                  return (
                    <div style={{ alignSelf: "center" }}>
                      <img
                        src={i}
                        alt="parner icon"
                        className="img-fluid"
                        style={{ margin: "5px" }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}

          <h3>Institutional partners</h3>
          <br />
          <br />

          {_breakInChunck(institutionalPartnersIcon, 6).map((chunk) => {
            return (
              <div className="parner-gallery">
                {chunk.map((i) => {
                  return (
                    <div style={{ alignSelf: "center" }}>
                      <img
                        src={i}
                        alt="parner icon"
                        className="img-fluid"
                        style={{ margin: "5px" }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </PaddedSection>

      <div className="partner-with-us">
        <PaddedSection style={{ backgroundColor: "#007299" }}>
          <div className="partner-with-us-content">
            <h1>Become a partner</h1>
            <button className="intro-btn btn2">PARTNER WITH US</button>
          </div>
        </PaddedSection>
      </div>
    </Layout>
  );
};

export default PartnershipPage;
