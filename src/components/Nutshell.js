import React from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar";
import Header from "./nav/Header";
import "./nav/NavBar.css";
import "./nav/Header";
// import "./Nutshell.css"

const Nutshell = () => {
  return (
    <>
      <NavBar />
      <Header />
      <ApplicationViews  />
    </>
  );
};

export default Nutshell;
