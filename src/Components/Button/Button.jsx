import React from "react";
import "./Button.css";

const Button = ({ text, onClick }) => (
  <button className="Button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
