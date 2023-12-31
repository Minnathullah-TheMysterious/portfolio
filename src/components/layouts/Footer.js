import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <footer className="py-5">
          <div className="d-flex justify-content-around">
            <div className="mb-3">
              <h5>Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to={"/"} className="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to={"/about"} className="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to={"/contact"} className="nav-link p-0 text-muted">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to={"/services"} className="nav-link p-0 text-muted">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to={"/projects"} className="nav-link p-0 text-muted">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink
                    to={"/certifications"}
                    className="nav-link p-0 text-muted"
                  >
                    Certifications
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h5>Projects</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    to={"https://wrist-worthy.vercel.app"}
                    className="nav-link p-0 text-muted"
                    target="_blank"
                  >
                    WristWorthy
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to={"https://mmr-ecommerce.vercel.app"}
                    className="nav-link p-0 text-muted"
                    target="_blank"
                  >
                    E-commerce
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to={"https://books-mmr.vercel.app"}
                    className="nav-link p-0 text-muted"
                    target="_blank"
                  >
                    BooksMMR
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to={"https://newsmmr.vercel.app"}
                    className="nav-link p-0 text-muted"
                    target="_blank"
                  >
                    NewsMMR
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to={"https://text-utils-two-woad.vercel.app"}
                    className="nav-link p-0 text-muted"
                    target="_blank"
                  >
                    TextUtils
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h5>Social Media</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link
                    to={"https://www.instagram.com/mystery_minnat_556/"}
                    className="nav-link p-0 text-muted"
                    target="_blank"
                  >
                    <BsInstagram /> Instagram
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to={
                      "https://www.facebook.com/profile.php?id=100082452596728"
                    }
                    className="nav-link p-0 text-muted"
                    target="_blank"
                  >
                    <BsFacebook /> Facebook
                  </Link>
                </li>
                <li className="nav-item mb-2">
                  <Link
                    to={"https://twitter.com/ultimaterahmani"}
                    className="nav-link p-0 text-muted"
                    target="_blank"
                  >
                    <BsTwitter /> Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-end border-top">
            <p>
              Copyright © Minnathullah's Portfolio | Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
