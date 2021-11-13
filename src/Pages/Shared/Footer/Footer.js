import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-logo">
          <img src={Logo} width="250" alt="" />
        </div>
        <div className="footer-links">
          <Link className="footer-link" to="/login">
            Login
          </Link>
          <Link className="footer-link" to="/glasses">
            Glasses
          </Link>
          <Link className="footer-link" to="/developer">
            Developer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
