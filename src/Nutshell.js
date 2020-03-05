import React, { useState } from "react";
// import ApplicationViews from "./ApplicationViews";
import NavBar from "./components/nav/NavBar"
import "./NavBar.css";
import Header from "./components/nav/Header"

const Nutshell = () => {
    return (
        <>
        <NavBar />
        <Header />
        {/* <ApplicationViews  /> */}
        </>
    )
}

export default Nutshell;