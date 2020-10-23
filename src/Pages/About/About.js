import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import "./About.scss";
import Layout from "../../Components/Layout";
import image3 from "../../assets/img/Image-3.png";
import image4 from "../../assets/img/Image-4.png";
import image5 from "../../assets/img/Image-5.png";
import PaddedSection from "../../Components/Layout/PaddedSection/PaddedSection";
import InfoList from "../../Components/InfoList/InfoList";
import Ourteam from "./Components/OurTeam/Ourteam";

const AboutPage = (props) => {
  return (
    <Layout {...props}>
      <div className="quick-info">
        <Row className="about-quick-info">
          <Col md={6} sm={12} lg={4}>
            Black in AI is a place for sharing ideas, fostering collaborations
            and discussing initiatives to increase the presence of Black people
            in the field of Artificial Intelligence.
          </Col>
        </Row>

        <div className="about-gallery">
          <div class="about-gallery-row">
            <div class="about-gallery-column">
              <img src={image3} alt="logo" style={{ height: "98.9%" }} />
            </div>
            <div class="about-gallery-column">
              <img src={image5} alt="logo" />
              <img src={image4} alt="logo" />
            </div>
          </div>
        </div>
      </div>

      <div className="middle-content">
        <PaddedSection>
          <div className="middle-content__top-container">
            <h1>Why AI has to reflect society.</h1>

            <div className="middle-content__top-container--left">
              <>
                <h3>Representation Matters.</h3>
                <p>
                  While artificial intelligence (AI) has the potential to solve
                  an incredible spectrum of problems and challenges in our
                  lives, our work and our world, there is a widening disconnect
                  between the people who are introducing and deploying AI-based
                  solutions and those who set policies for when and how these
                  solutions are used.{" "}
                </p>
              </>

              <>
                <h3>Missed Opportunities.</h3>
                <p>
                  Much has been written about one consequence of this
                  disconnect—algorithmic bias in AI systems, in which machine
                  learning algorithms trained on data that reflects historical
                  discrimination replicate and even magnify it. But there’s
                  another pressing issue: There are many missed opportunities to
                  use AI for the good of many.{" "}
                </p>
              </>
            </div>
          </div>
          <hr />

          <InfoList
            content={[
              {
                title: "2017",
                paragragh:
                  "BAI was founded in 2017 to challenge the status quo.",
              },
              {
                title: "3000",
                paragragh:
                  "We’ve grown from a small facebook group to a global movement comprising 3000 community members & allies who believe that more black people should shape the direction of the field of AI.",
              },
              {
                title: "10+",
                paragragh:
                  "Number of workshops held or some other metric that shows how far we’ve come.",
              },
              {
                title: "40x",
                paragragh:
                  "We have increased the number of Black people participating in major AI conferences globally by orders of magnitude through advocacy, financial aid and our workshop.",
              },
            ]}
          />
        </PaddedSection>
      </div>

      <PaddedSection style={{ marginTop: "120px" }}>
        <Ourteam />
      </PaddedSection>

      <div className="about-getting-started">
        <h3>We’re just getting started</h3>
        <p>
          We envision a thriving, end-to-end ecosystem sustainably allocating
          black talent to the development of AI through engaging with students,
          researchers, entrepreneurs.
        </p>
        <div className="about-getting-started__btns">
          <button className="intro-btn btn2" style={{ marginRight: "5px" }}>
            HOW YOU CAN HELPS
          </button>
          <button className="intro-btn btn-white">JOIN US</button>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
