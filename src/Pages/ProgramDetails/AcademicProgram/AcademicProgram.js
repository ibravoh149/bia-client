import React, { useEffect } from "react";
import { Row, Col } from "reactstrap";
import "./AcademicProgram.scss";
import "../ProgramDetails.scss";
import Layout from "../../../Components/Layout";
import image10 from "../../../assets/img/Image10.png";
import PaddedSection from "../../../Components/Layout/PaddedSection/PaddedSection";
import { Link } from "react-router-dom";
import { AccordionContainer } from "../../../Components/Accordion/Accordion";

const AcademicProgram = (props) => {
  return (
    <Layout {...props}>
      <PaddedSection>
        <div className="academic-program-logo">
          <img
            src={image10}
            alt="academic program logo"
            className="img-fluid"
          />
        </div>
        <div className="academic-program-detail">
          <h4 className="academic-program-heading1">Academic Program</h4>
          <p className="academic-program-p1">
            The Black in AI Academic program is committed to serving as a
            resource and supporting Black junior researchers as they apply to
            graduate programs, navigate graduate school, and enter the
            postgraduate job market. To that end, we conduct online information
            sessions, provide scholarships to cover costs related to
            applications, assign participants to peer and senior mentors, and
            share crowdsourced documents that demystify application processes.
            <br />
            <br />
            In addition to these efforts, we conduct research studies to explore
            and expose the barriers that affect Black junior researchers, and
            advocate for structural changes to remove these barriers and foster
            equitable research environments.
            <br />
            <br /> Our program is presently designed to cover three areas of
            graduate education:
          </p>

          <h4 className="academic-program-heading2">
            1. Graduate Application Mentoring Program
          </h4>
          <p className="academic-program-p1">
            To support Black students seeking admission into masters and Ph.D.
            programs around the world. This program currently serves over 200
            Black applicants in this application cycle.
          </p>

          <h4 className="academic-program-heading2">
            2. Graduate School Mentoring
          </h4>
          <p className="academic-program-p1">
            To offer guidance, mentorship, and resources for current graduate
            students.
          </p>

          <h4 className="academic-program-heading2">
            3. Postgraduate Application Network
          </h4>
          <p className="academic-program-p1">
            To empower soon-to-be or recent Black Ph.D. students seeking
            postdoctoral, faculty, and research scientist positions. This
            program is currently serving over 100 Black applicants during this
            application cycle.
          </p>

          <p className="academic-program-p1">
            Since 2017, the graduate application mentoring program has served
            over 400 students overall, with the support of nearly 100 mentors.
            Participants in this program have enrolled at universities including
            Australian National University, University of California - Berkeley,
            University of British Columbia, University of Capetown, Carnegie
            Mellon University - Africa, University College Dublin, Cornell
            University, Georgia Institute of Technology, University of Oxford,
            Stanford University, University of the Witwatersrand, and many
            others. <br />
            <br />
            Starting 2020, this program expanded into the Black in AI Academic
            Positions program, now serving current graduate students and over
            100 Black junior scholars applying to postgraduate positions during
            the 2020/21 application cycle. Members of this program are
            interested in research careers in academia, industry, and policy,
            and previous participants have already had a significant impact in
            the field of AI. <br />
            <br />
            On this page we will answer frequently asked questions and provide
            opportunities to advertise graduate, fellowship, postdoctoral,
            faculty, and research scientist positions. (See below.) <br />
            <br />
            If you are interested in supporting us by volunteering your time as
            a mentor, donating to the program, or supporting us with our
            advocacy, please reach out to the organizers.
          </p>

          <div className="spacer-40px"></div>
          <h4 className="academic-program-heading2">Contact</h4>
          <p className="academic-program-p1">
            <a href="#0" target="_blank" className="p-link">
              bai-acad-team@googlegroups.com
            </a>
          </p>

          <div className="spacer-40px"></div>

          <h4 className="academic-program-heading2">Organizers</h4>
          <p className="academic-program-p1">
            <span className="bold-600">Rediet Abebe, </span>Ph.D Harvard
            University
          </p>
          <p className="academic-program-p1">
            <span className="bold-600">Moses Namara, </span>
            Clemson University
          </p>
          <p className="academic-program-p1">
            <span className="bold-600">Daniel Nkemelu, </span>
            Georgia Institute of Technology
          </p>
          <p className="academic-program-p1">
            <span className="bold-600">Ezinne Nwankwo, </span>Duke University
          </p>

          <div className="spacer-40px"></div>

          <h4 className="academic-program-heading2">Supported by</h4>
          <p className="academic-program-p1">Black in AI</p>

          <div className="spacer-40px"></div>

          <h4 className="academic-program-heading2">FAQs</h4>

          <AccordionContainer
            content={[
              {
                question: "How can I take part in this program?",
                answer:
                  "If you self-identify as Black and are applying to graduate or postgraduate positions or are currently in graduate school, please sign up to join the Black in AI google group here and follow instructions sent out over our email list.",
              },
              {
                question: "How can I support this program as an academic?",
                answer: "",
              },
              {
                question: "How can my organization support the program?",
                answer: "",
              },
              {
                question:
                  "How can I advertise graduate student, postdoctoral fellowship, faculty, or research scientist positions at my institutions? ",
                answer: "",
              },
            ]}
          />

          <div className="spacer-40px"></div>

          <h4 className="academic-program-heading2">Resources</h4>
          <p className="academic-program-p1">
            Help us identify graduate programs with lower financial barriers by
            filling out the respective forms below:
          </p>
          <p className="academic-program-p1">
            <a href="#0" target="_blank" className="p-link">
              → GRE optional/free programs
            </a>
          </p>
          <p className="academic-program-p1">
            <a href="#0" target="_blank" className="p-link">
              → Programs with application fee waivers
            </a>
          </p>
          <p className="academic-program-p1">
            <a href="#0" target="_blank" className="p-link">
              → Funded Masters programs
            </a>
          </p>
          <p className="academic-program-p1">
            <a href="#0" target="_blank" className="p-link">
              → Graduate Fellowships/Scholarships
            </a>
          </p>
          <p className="academic-program-p1">
            <a href="#0" target="_blank" className="p-link">
              → Postdoctoral, Faculty & Research Scientist positions
            </a>
          </p>
        </div>
      </PaddedSection>
      <div style={{ marginBottom: "120px" }}></div>
    </Layout>
  );
};

export default AcademicProgram;
