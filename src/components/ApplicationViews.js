import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home {...props} />;
        }}
      />

      <Route
        exact
        path="/login"
        render={props => {
          return <Login setUser={setUser} {...props}/>;
        }}
      />
      <Route
        exact
        path="/signup"
        render={props => {
          return <SignUp setUser={setUser} {...props}/>;
        }}
      />
    </React.Fragment>
  );
};
export default ApplicationViews;
