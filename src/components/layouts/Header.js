import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-primary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Minnathullah's Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/services"}>
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/projects"}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/contact"}>
                  Contact Me
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="https://www.linkedin.com/in/mohammed-minnathullah-06885b263"
                  target="_blank"
                >
                  <BsLinkedin className="text-light fs-4" />
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to={"https://github.com/Minnathullah-TheMysterious"} target="_blank">
                  <BsGithub className="text-light fs-4" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
