import React from "react";
import "./Logo.css";
export default function Logo() {
  return (
    <div className="logo">
      <div className="LogoRedCircle">
        <div className="LogoFirstTriangle"></div>
        <div className="LogoSecondTriangle"></div>
        <div className="LogoThirdTriangle"></div>
      </div>
      <div className="logo-text">
        <div className="logo-text-red-queen">
          <div className="logo-text-red">RED</div>
          <div className="logo-text-queen">QUEEN</div>
        </div>
        <div className="logo-text-solutions">SOLUTIONS</div>
      </div>
    </div>
  );
}
