import React from "react";
import "../../App.css";
import Footer from "../desktop-components/footer/Footer";
import Header from "../desktop-components/header/Header";
import Main from "../desktop-components/main/Main";
import "../../styles/reset.css";

const AppDesktop = () => {
  return (
    <div className="App-desktop">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default AppDesktop;
