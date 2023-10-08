import React from "react";
import { NavLink } from "react-router-dom";
import web from "../Images/profile.jpg";

const Header = () => {
  return (
    <div>
      <header>
        <div class="user">
          <img src={web} alt="profile logo" />
          <h3 class="name">Rameez Jaffri</h3>
          <p class="post"> <b>Full Stack Developer</b></p>
          <p class="post"><b>MERN</b> </p>
        </div>

        <nav class="navbar">
          <ul>
            <li>
              <NavLink exact to="/home">
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about">
                {" "}
                About
              </NavLink>
            </li>
            <li>
            <NavLink exact to="/education">
                {" "}
                Education
              </NavLink>
            </li>
            <li>
            <NavLink exact to="/portfolio">
                {" "}
                Portfolio
              </NavLink>
            </li>
            <li>
            <NavLink exact to="/contact">
                {" "}
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
