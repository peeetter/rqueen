import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Header.css";

import WhatWeDo from "../WhatWeDo/WhatWeDo.js";
import WhoWeAre from "../WhoWeAre/WhoWeAre.js";
import Contact from "../Contact/Contact.js";

function Header() {
  return (
    <Router>
      <div className="header">
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
    </Router>
  );
}

export default Header;
