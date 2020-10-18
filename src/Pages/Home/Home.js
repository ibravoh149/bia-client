import React, { useEffect } from "react";
import BannerIntro from "./Components/Banner/BannerIntro/BannerIntro";
import BannerInfo from "./Components/Banner/BannerInfo/BannerInfo";
import Section from "./Components/Sections/Sections";
import Testimonial from "./Components/Testimonial/Testimonial";
import Layout from "../../Components/Layout";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <BannerIntro />
      <BannerInfo />
      <Section />
      <Testimonial />
      <div style={{ marginTop: "120px" }}></div>
    </Layout>
  );
};
export default HomePage;
