import React, { Component } from "react";
import Header from "../Header";

export default class Navbar extends Component {
  render() {
    return (
      <nav className=
        "navbar navbar-expand navbar-light bg-light">
        <div className="navbar-collapse row" id="navbarNav">
          <Header />
        </div>
      </nav>
      )
  }
}