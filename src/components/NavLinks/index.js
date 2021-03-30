import React from "react";
import { Link, useLocation } from "react-router-dom";

const location = useLocation;

function NavLinks() {
  return (
    <nav className="navbar">
      <h1 className="navbar-brand">
        <Link to="/" className={location.pathname === "/"}>
          Rudy Menjivar
        </Link>
      </h1>
      <div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavLinks;