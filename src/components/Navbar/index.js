import React, { Component } from "react";
import Header from "../Header";

export default class Navbar extends Component {
  render() {
    return (
      <nav className=
        "navbar navbar-expand-lg navbar-dark bg-dark">
        <div className=
          "navbar-collapse row text-white"         id="navbarNav">
          <Header />
          <ul class=
            "navbar-nav ml-auto pr-4" 
            >
            <li class="nav-item">
              <a class="nav-link" href="">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      )
  }
}