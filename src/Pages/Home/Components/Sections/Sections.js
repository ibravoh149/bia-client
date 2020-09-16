import React from "react";
import SectionContainer from "./SectionContainer";
import "./SectionContainer.scss";
import image1 from "../../../../assets/img/Image.png";
import image2 from "../../../../assets/img/Image-1.png";
import image3 from "../../../../assets/img/Image-2.png";

const TextContent = ({ buttonText, heading, paragraph, containerClass }) => {
  return (
    <div className={`section-content ${containerClass}`}>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <button className="intro-btn btn1">{buttonText}</button>
    </div>
  );
};

const ImageContent = ({ image }) => {
  return (
    <div className="section-image">
      <img src={image} alt={image} />
    </div>
  );
};

const Sections = () => {
  return (
    <React.Fragment>
      <SectionContainer>
        <ImageContent image={image1} />
        <TextContent
          heading="A sentence that sums up what the programs are about."
          paragraph="It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed."
          buttonText="SEE OUR PROGRAMS"
          containerClass="ml-20"
        />
      </SectionContainer>

      <SectionContainer>
        <TextContent
          heading="A sentence that sums up what the programs are about."
          paragraph="It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed."
          buttonText="JOIN US"
          containerClass="mr-20"
        />
        <ImageContent image={image2} />
      </SectionContainer>

      <SectionContainer>
        <ImageContent image={image3} />
        <TextContent
          heading="A sentence that sums up what the programs are about."
          paragraph="It has been placed here solely to demonstrate the look and feel of finished, typeset text. Only for show. He who searches for meaning here will be sorely disappointed."
          buttonText="LEARN MORE"
          containerClass="ml-20"
        />
      </SectionContainer>
    </React.Fragment>
  );
};

export default Sections;