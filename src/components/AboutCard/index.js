import React from "react";
import "./StylesAbout.css";

export default function AboutCard() {
  return (
    <div className="a-container" id="home">
      <div className="a-section">
        <div className="about-card">
          <h2 className="about-title">Hi, I'm Rudy!</h2>
          <p className="about-description">
            I'm a Full-Stack Web Developer and I create responsive websites.
          </p>
          <p className="about-description">
            I primarily use technologies based on MERN (MongoDB, Express, ReactJS, and NodeJs), so I can build anything from starter websites to advanced sites that require a database, or extra features.
          </p>
        </div>
      </div>
    </div>
  );
};
