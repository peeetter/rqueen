import React from "react";
import "./Button.css";

const Button = ({ text, onClick }) => (
  <div className="Button" onClick={onClick}>
    {text}
  </div>
);

export default Button;
