import React from "react";
import { Row, Col } from "reactstrap";
import "./Program.scss";
import Layout from "../../Components/Layout";
import image from "../../assets/img/Image.png";
import image6 from "../../assets/img/Image6.png";
import image7 from "../../assets/img/Image7.png";
import image8 from "../../assets/img/Image8.png";
import PaddedSection from "../../Components/Layout/PaddedSection/PaddedSection";
import ConferenceItem from "./Component/ConferenceItem/ConferenceItem";
import ProgramListItem from "./Component/ProgramList/ProgramList";

const ProgramPage = (props) => {
  return (
    <Layout {...props}>
      <PaddedSection>
        <Row className="">
          <Col
            md={6}
            sm={12}
            lg={6}
            style={{ alignSelf: "center" }}
            className="program-quick-info"
          >
            <h4>An inclusive ecosystem.</h4>
            <p>
              Our initiatives include an academic program, events at various
              conferences related to AI, advocacy, and community building
              (through our online forums).
            </p>
          </Col>

          <Col md={6} sm={12} lg={6}>
            <img src={image} alt="logo1" className="img-fluid" />
          </Col>
        </Row>
      </PaddedSection>

      <div className="program-middle-content">
        <PaddedSection>
          <div className="program-conference-works">
            <h2 className="program-conference-works__heading">
              Conferences & Workshops
            </h2>
            <Row>
              <Col
                md={6}
                lg={6}
                sm={12}
                className="program-conference-works__left-content"
              >
                <p>
                  Our annual Black in AI (BAI) workshop co-located with NeurIPS,
                  as well as our satellite gatherings in other AI conferences
                  (e.g. AAAI, CVPR, ICML, FAT*) allow members of the BAI
                  community to attend NeurIPS without feeling isolated.
                </p>
                <button className="intro-btn btn-white">
                  BECOME A SPONSOR
                </button>
              </Col>
              <Col md={6} lg={6} sm={12}>
                <ConferenceItem>
                  <div className="conference-item">
                    <h3>BAI 2020</h3>
                    <button className="intro-btn btn2">ATTEND</button>
                  </div>
                </ConferenceItem>

                <ConferenceItem>
                  <div className="conference-item">
                    <h3>BAI 2019</h3>
                    <button className="intro-btn btn4">VIEW HIGHLIGHTS</button>
                  </div>
                </ConferenceItem>

                <ConferenceItem>
                  <div className="conference-item">
                    <h3>BAI 2018</h3>
                    <button className="intro-btn btn4">VIEW HIGHLIGHTS</button>
                  </div>
                </ConferenceItem>

                <ConferenceItem>
                  <div className="conference-item">
                    <span>View more conferences</span>
                  </div>
                </ConferenceItem>
              </Col>
            </Row>
          </div>
        </PaddedSection>
      </div>

      <PaddedSection style={{ marginTop: "120px", marginBottom: "120px" }}>
        <Row className="program-list-c">
          <Col md={4} lg={4} sm={12}>
            <ProgramListItem
              image={image6}
              title="Academic Program"
              paragraph="The Black in AI Academic program is committed to serving as a resource and supporting Black junior researchers as they apply to graduate programs, navigate graduate school, and enter the postgraduate job market. To that end, we conduct online information sessions, provide scholarships to cover costs related to applications, assign participants to peer and senior mentors, and share crowdsourced documents that demystify application processes."
              link="academic-program"
            />
          </Col>
          <Col md={4} lg={4} sm={12}>
            <ProgramListItem
              image={image7}
              title="Financial Support"
              paragraph="Black in AI awards need-based travel grants to attend our annual workshop and the NeurIPS conference. Our grants cover flights, accommodation, daily per diems, visa fees, and registration for the NurIPS conference. In 2018, 188 works from 28 countries were presented at BAI with a total of $375k given out in travel grants supporting 284 people."
              link="financial-support"
            />
          </Col>
          <Col md={4} lg={4} sm={12}>
            <ProgramListItem
              image={image8}
              title="Advocacy"
              paragraph="Our advocacy on barriers faced by our members ranging from visa issues while attending major AI conferences, to the lack of a presence by international companies on the African continent has resulted in new processes by conferences such as NeurIPS to mitigate barriers faced by our members and the first Google AI center in Africa (Accra, Ghana)."
              link="advocacy"
            />
          </Col>
        </Row>
        <button className="intro-btn btn1">LEARN MORE</button>
      </PaddedSection>
    </Layout>
  );
};

export default ProgramPage;
