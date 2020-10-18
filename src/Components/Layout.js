import React from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
