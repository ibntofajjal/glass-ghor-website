import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top my-nav d-block mb-5">
        <div className="container">
          <Link to="/home" className="navbar-brand">
            <img src={Logo} alt="" width="150" />
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 fs-4 navs ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/glasses"
                >
                  Glasses
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-dark login btn btn-danger"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active text-dark login btn btn-danger"
                  aria-current="page"
                  to="/login"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
