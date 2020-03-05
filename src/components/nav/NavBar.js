import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/login");
  };
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/news">
        News
      </a>
      <a className="menu-item" href="/events">
        Events
      </a>
      <a className="menu-item" href="/tasks">
        Tasks
      </a>
      <a className="menu-item" href="/chat">
        Chat
      </a>
      <a className="menu-item" href="/friends">
        Friends
      </a>
      {props.hasUser ? (
        <li>
          <NavLink className="menu-item" to={"/login"}>
            {" "}
            Logout{" "}
          </NavLink>
        </li>
      ) : null}
    </Menu>
  );
};
export default withRouter(NavBar);
