import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="who-we-are-container">
      <h2>Rubrik</h2>
      <p className="who-we-are-container-text">
        Vi specialiserar oss på att bygga system som effektiviserar. Det kan
        exempelvis röra sig om bokningssystem, en webapp för personalhantering
        eller en iPhone-app till ert lager eller fabrik.
      </p>
      <p>Våra system är:</p>
      <ul>
        <li>Användarvänliga</li>
        <li>Säkra</li>
        <li>Buggfria</li>
      </ul>
      <p></p>
    </div>
  );
};

export default About;
