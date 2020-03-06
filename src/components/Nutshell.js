import React, { useState, useEffect } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar";
import Header from "./nav/Header";
import "./nav/NavBar.css";
import "./nav/Header";
import "./Nutshell.css";

const Nutshell = () => {
  const isAuthenticated = () =>
    sessionStorage.getItem("credentials") !== null ||
    localStorage.getItem("credentials") !== null;

  const [userFromState, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    localStorage.setItem("credentials", JSON.stringify(user));
    sessionStorage.setItem("credentials", JSON.stringify(user));

    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    localStorage.clear();
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <Header />
      <NavBar hasUser={userFromState} clearUser={clearUser} setUser={setUser} />
      <ApplicationViews hasUser={userFromState} setUser={setUser} />
    </>
  );
};

export default Nutshell;
