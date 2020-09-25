import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>

      <div className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-btn">
            <NavLink
              activeClassName="is-active"
              to="/what-we-do"
              className="link"
            >
              What we do
            </NavLink>
          </li>
          <li className="navbar-btn">
            <NavLink
              activeClassName="is-active"
              to="/who-we-are"
              className="link"
            >
              How we think
            </NavLink>
          </li>
          <li className="navbar-btn">
            <NavLink activeClassName="is-active" to="/contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
