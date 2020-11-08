import React from "react";
import "./Logo.css";
import { ReactComponent as LogoText } from "./logotext.svg";
const Logo = () => (
  <div className="Logo">
    <div className="LogoText">
      <LogoText />
    </div>
  </div>
);

export default Logo;
