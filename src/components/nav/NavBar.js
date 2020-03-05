import React from "react";  
import {slide as Menu} from "react-burger-menu"

const NavBar = props => {
    return (
        <Menu>
        <a className = "menu-item" href="/">
            Home
        </a>
        <a className = "menu-item" href="/news">
            News
        </a>
        <a className = "menu-item" href="/events">
            Events
        </a>
        <a className = "menu-item" href="/tasks">
            Tasks
        </a>
        <a className = "menu-item" href="/chat">
            Chat
        </a>
        <a className = "menu-item" href="/friends">
            Friends
        </a>
        <a className = "menu-item" href="/login">
            Login
        </a>
        </Menu>
    )
}
export default NavBar;
