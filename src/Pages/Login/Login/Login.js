import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import LoginImg from "../../../img/Banner-Background/login.png";
import "./Login.css";

const Login = () => {
  return (
    <div>
      {/* NAVBAR============= */}
      <Navbar></Navbar>
      {/* =============NAVBAR */}

      <div className="container login-page">
        <div className="row">
          <div className="col col-lg-6 col-12 input-fields">
            <input type="email" name="" id="" /> <br />
            <input type="email" name="" id="" /> <br />
            <input type="email" name="" id="" /> <br />
          </div>
          <div className="col col-lg-6 col-12">
            <img src={LoginImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      {/* FOOTER============= */}
      <Footer></Footer>
      {/* =============FOOTER */}
    </div>
  );
};

export default Login;
