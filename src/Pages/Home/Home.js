import React from "react";
import Header from "../../Components/Layout/Header/Header";
import BannerIntro from "./Components/Banner/BannerIntro/BannerIntro";
import BannerInfo from "./Components/Banner/BannerInfo/BannerInfo";
import Section from "./Components/Sections/Sections";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "../../Components/Layout/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <BannerIntro />
      <BannerInfo />
      <Section />
      <Testimonial />
      <Footer />
    </div>
  );
};
export default HomePage;
