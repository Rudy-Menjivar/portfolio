import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom text-center">
        <nav className="navbar-dark bg-dark">
          <a className="navbar-brand" href="https://github.com/Rudy-Menjivar" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="navbar-brand" href="https://www.linkedin.com/in/rudy-menjivar-" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
    )
  }
}