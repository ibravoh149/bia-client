import React from "react";
import "./Testimonial.scss";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import StepWizard from "react-step-wizard";
import image1 from "../../../../assets/img/keita_broadwater.jpeg";
import image2 from "../../../../assets/img/krystal_maughan_bai.png";
import image3 from "../../../../assets/img/ramon_vilarino.jpg";

const TestimonialItem = (props) => {
  const {
    name,
    story,
    nextStep,
    previousStep,
    currentStep,
    lastStep,
    goToStep,
    totalSteps,
    image,
  } = props;

  const _onNextClick = () => {
    console.log(currentStep);
    console.log(lastStep);
    if (currentStep === totalSteps) return goToStep(1);
    return nextStep();
  };

  const _onPreviousClick = () => {
    if (currentStep === 1) return lastStep();
    return previousStep();
  };

  return (
    <div className="testimonial-container">
      <div className="user-image border-color-white testimonial-image">
        <img src={image} alt="user profile" />
      </div>
      <div className="testimonial-container__content-right">
        <p>{story}</p>
        <h3>{name}</h3>
        {/* <span>AI Researcher, University of Ibadan, Nigeria</span> */}
        <span style={{ marginTop: "44px", cursor: "pointer" }}>
          <IoIosArrowRoundBack size={25} onClick={_onPreviousClick} />
          <IoIosArrowRoundForward
            // color="#1F2421"
            size={25}
            onClick={_onNextClick}
          />
        </span>
      </div>
    </div>
  );
};
const Testimonial = () => {
  return (
    <StepWizard
      className="testimonial-container-wizard"
      transitions={{
        enterRight: "none",
        enterLeft: "none",
        exitRight: "none",
        exitLeft: "none",
      }}
    >
      <TestimonialItem
        name="Keita Broadwater"
        story="I got my current job through the Black in AI forum. I would like to give back to the community that has helped me."
        image={image1}
      />
      <TestimonialItem
        name="Krystal Maughan"
        story="This community is the closest thing to a family that I’ve found in
            this field."
        image={image2}
      />
      <TestimonialItem
        name="Ramon Vilarino"
        story="I found a mentor to help me work on my paper. Black in AI is simply amazing. It’s the nicest part of being in STEM."
        image={image3}
      />
    </StepWizard>
  );
};
export default Testimonial;
