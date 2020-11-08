import React, { useEffect } from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

const Layout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { children } = props;
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <div style={{ marginTop: "12rem" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
