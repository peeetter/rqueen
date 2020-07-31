import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className="header">
      <Logo />
      <ul className="navbar">
        <li className="navbar-btn">
          <Link to="/who-we-are" className="link">
            Who we are
          </Link>
        </li>

        <li className="navbar-btn">
          <Link to="/what-we-do" className="link">
            What we do
          </Link>
        </li>
        <li className="navbar-btn">
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
