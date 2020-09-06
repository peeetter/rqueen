import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className="header">
      <Logo />

      <div className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-btn">
            <Link to="/what-we-do" className="link">
              What we do
            </Link>
          </li>
          <li className="navbar-btn">
            <Link to="/who-we-are" className="link">
              How we think
            </Link>
          </li>
          <li className="navbar-btn">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
