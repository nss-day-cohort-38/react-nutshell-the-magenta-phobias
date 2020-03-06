import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = props => {
  return (
    <>
      <div className="home-container">
        <div className="home-picture">
          <picture>
            <img
              src="https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              alt="home-photo"
              className="home-photo"
            />
          </picture>
        </div>
        <div className="button-container">
          <button
            id="homeBtn-login"
            className="ui blue basic button"
            onClick={() => {
              props.history.push("/login");
            }}
          >
            Sign In
          </button>
          <button
            id="homeBtn-createaccount"
            className="ui blue basic button"
            onClick={() => props.history.push("/createaccount")}
          >
            Create an account
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
