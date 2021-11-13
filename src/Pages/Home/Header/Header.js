import React from "react";
import "./Header.css";
import Logo from "../../../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-banner container">
          {/* <img src={Logo} width="500" className="mt-5" alt="" /> */}
          <h1>
            Exclusive <br /> <span>Sunglasses</span> <br /> For You
          </h1>
          <Link to="/glasses">
            <button className="btn btn-primary header-btn">
              　　View Glasses　　
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
