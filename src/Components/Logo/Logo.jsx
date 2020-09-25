import React from "react";
import "./Logo.css";
import { ReactComponent as LogoText } from "./logotext.svg";
export default function Logo() {
  return (
    <div className="Logo">
      <div className="LogoRedCircle">
        <div className="LogoFirstTriangle"></div>
        <div className="LogoSecondTriangle"></div>
        <div className="LogoThirdTriangle"></div>
      </div>
      <div className="LogoText">
        <LogoText />
      </div>
    </div>
  );
}
