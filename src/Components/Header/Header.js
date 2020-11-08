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
          {/* <li className="navbar-btn">
            <NavLink activeClassName="is-active" to="/" className="link" exact>
              What we do
            </NavLink>
          </li> */}
          <li className="navbar-btn">
            <NavLink
              activeClassName="is-active"
              to="/about"
              className="link"
              exact
            >
              About
            </NavLink>
          </li>
          <li className="navbar-btn">
            <NavLink
              activeClassName="is-active"
              to="/contact"
              className="link"
              exact
            >
              Hire us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
