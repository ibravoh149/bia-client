import React from "react";
import SectionContainer from "./SectionContainer";
import "./SectionContainer.scss";
import image1 from "../../../../assets/img/Image.png";
import image2 from "../../../../assets/img/Image-1.png";
import image3 from "../../../../assets/img/Image-2.png";

const TextContent = ({
  buttonText,
  heading,
  paragraph,
  containerClass,
  buttonLink,
}) => {
  return (
    <div className={`section-content ${containerClass}`}>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <button
        className="intro-btn btn1"
        onClick={buttonLink ? () => window.open(buttonLink) : () => {}}
      >
        {buttonText}
      </button>
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
          heading="Fostering an including, end-to-end ecosystem."
          paragraph="Our initiatives include an academic positions mentorship program, events at various conferences related to AI, advocacy, and community building (through our online forums)."
          buttonText="SEE OUR PROGRAMS"
          // containerClass="ml-20"
        />
      </SectionContainer>

      <SectionContainer>
        <TextContent
          heading="A vibrant online community."
          paragraph="
          We use the Facebook group for social discussions related to AI or being a Black researcher. We use the forum to aggregate scholarships, fellowships, internship and job opportunities, summer schools, or research related discussions."
          buttonText="JOIN US"
          buttonLink="https://docs.google.com/forms/d/1pv34QhQE74gBnDu2xTdLmMNnWykY5tN2wihWIh7mwrQ/viewform?edit_requested=true"
          // containerClass="mr-20"
        />
        <ImageContent image={image2} />
      </SectionContainer>

      <SectionContainer>
        <ImageContent image={image3} />
        <TextContent
          heading="A global network of partners"
          paragraph="Partners play a key role in accelerating our mission and impact through making our workshop feasible and sustaining our community"
          buttonText="LEARN MORE"
          // containerClass="ml-20"
        />
      </SectionContainer>
    </React.Fragment>
  );
};

export default Sections;
