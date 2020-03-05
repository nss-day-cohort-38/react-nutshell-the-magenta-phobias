import React, { useState } from "react";
// import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar";
import "./nav/NavBar.css";
// import "./Nutshell.css"

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
      <NavBar hasUser={userFromState} clearUser={clearUser} setUser={setUser} />
      <ApplicationViews hasUser={userFromState} setUser={setUser} />
    </>
  );
};

export default Nutshell;
