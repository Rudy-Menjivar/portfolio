import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const location = useLocation;

function NavLinks() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/about">Rudy Menjivar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon className="fawesomespan" icon={faBars} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavLinks;