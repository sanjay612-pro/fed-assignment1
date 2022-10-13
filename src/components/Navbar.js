import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-menu">
      <div className="logo">
        <strong>
          <a href="">
            <img src="images/logo.png" alt="Sam Jarvis logo" />
          </a>
        </strong>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/work">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
