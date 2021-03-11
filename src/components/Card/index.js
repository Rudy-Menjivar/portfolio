import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="container p5 m5">
        <div className="wrapper p-5 m5">
          <div className="card bg-light m-5">
            <div className="card-body">
            <h2 className="card-title">About Me</h2>
            <p>
                Greetings! I'm currently adding to my coding skills as I'm attending UC Davis. I'm knowledgeable in HTML, CSS, Javascript, jQuery, Node.js, APIs, MySQL, MongoDB and React (to name a few).
            </p>
            <p>
                I'll be graduating in the spring of 2021, with enough skills to work as a Full Stack Web Developer.
            </p>
            <p>
                My future plans also include helping small businesses setup their online presence or at the very least, improving it. My ultimate goal is to make a positive impact with every client that I work with, building those relationships to naturally gain referrals to help more clients.
            </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};
