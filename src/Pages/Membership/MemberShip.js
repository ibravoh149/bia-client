import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import "./Membership.scss";
import Layout from "../../Components/Layout";
import image1 from "../../assets/img/Image-1.png";
import PaddedSection from "../../Components/Layout/PaddedSection/PaddedSection";
import InfoList from "../../Components/InfoList/InfoList";
import Testimonial from "../../Components/Testimonial/Testimonial";

const MembershipPage = (props) => {
  return (
    <Layout {...props}>
      <PaddedSection>
        <Row className="">
          <Col
            md={6}
            sm={12}
            lg={6}
            style={{ alignSelf: "center" }}
            className="membership-quick-info"
          >
            <h4>Life changing connections.</h4>
            <p>
              The group was formed to create a space where Black people in AI
              can share ideas, collaborate with one another, & discuss
              initiatives for increasing our presence & inclusion in this
              increasingly influential field. It’s been a very special community
              that has been transformative for many of our members.
            </p>
          </Col>

          <Col md={6} sm={12} lg={6}>
            <img src={image1} alt="logo1" className="img-fluid" />
          </Col>
        </Row>
      </PaddedSection>

      <div className="membership-middle-content">
        <PaddedSection>
          <div className="membership-network">
            <Row>
              <Col
                md={6}
                lg={6}
                sm={12}
                className="membership-network__left-content"
              >
                <h2 className="membership-network__heading">
                  Be part of our network.
                </h2>

                <button className="intro-btn btn2">BECOME A MEMBER</button>
                <br />
                <button className="intro-btn btn-white">
                  MEMBERSHIP DIRECTORY
                </button>
              </Col>
              <Col
                md={6}
                lg={6}
                sm={12}
                className="membership-network__right-content"
              >
                <>
                  <h3>Career opportunities.</h3>
                  <p>
                    Access and post job opportunities, find mentors and
                    collaborators for your next research project and venture. We
                    have a network of 3000 members including high school,
                    undergraduate and graduate students, engineers, professors,
                    researchers, entrepreneurs, recruiters, artists.
                  </p>
                </>
                <br />

                <>
                  <h3>A tight knit network.</h3>
                  <p>
                    We have engaging discussions through our forum. Many of our
                    initiatives started with “what if?”
                  </p>
                </>
                <br />

                <>
                  <h3>Be part of something bigger than yourself.</h3>
                  <p>
                    By relating and connecting with one another, we justify and
                    normalize our presence in the field, support each other by
                    celebrating successes as well as providing support during
                    setbacks.
                  </p>
                </>
              </Col>
            </Row>
            <br />
            <hr />

            <Row className="member-figures">
              <Col md={6} lg={6} sm={12}>
                <>
                  <h3>3000</h3>
                  <p>
                    We’ve grown from a small facebook group to a global movement
                    comprising 3000 community members and allies who believe
                    that more black people should shape the direction of the
                    field of AI.
                  </p>
                </>
              </Col>
              <Col md={6} lg={6} sm={12}>
                <>
                  <h3>42</h3>
                  <p>Total number of countries with Black in AI members</p>
                </>
              </Col>
            </Row>
          </div>
        </PaddedSection>
      </div>

      <div className="tt-container">
        <Testimonial />
      </div>

      <div className="join-us">
        <PaddedSection style={{ backgroundColor: "#FAFAFA" }}>
          <div className="join-us-content">
            <h1>Join us today</h1>

            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <button className="intro-btn btn1">BECOME A MEMBER</button>
              <br />
              <button className="intro-btn btn2">MEMBERSHIP DIRECTORY</button>
            </div>
          </div>
        </PaddedSection>
      </div>
    </Layout>
  );
};

export default MembershipPage;
