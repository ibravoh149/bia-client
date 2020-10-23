import React, { useEffect } from "react";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

const Layout = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
