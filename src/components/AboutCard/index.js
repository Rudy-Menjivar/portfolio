import React from 'react';
import './AboutCard.css';

export default function AboutCard() {
  return (
    <div className="container p5 m5">
      <div className="wrapper p-5 m5">
        <div className="card bg-light m-5">
          <div className="card-body">
          <h2 className="card-title">About Me</h2>
          <p>
            Hello! My name is Rudy and I'm a Full-Stack Web Developer. I create responsive websites that are also mobile-ready, so they are displayed correctly on computers, tablets and smartphones.
          </p>
          <p>
            I primarily use technologies based on MERN (MongoDB, Express, ReactJS, and NodeJs), so I can build anything from a starter website to a more advanced site that requires a database, or extra features. The first step involves understanding each of my client's needs and business. This not only sets up the right build but also defines the best advertising campaign. Which I can also create with Google Adwords and any social media platform.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};
