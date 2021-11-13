import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import LoginImg from "../../../img/Banner-Background/login.png";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      {/* NAVBAR============= */}
      <Navbar></Navbar>
      {/* =============NAVBAR */}

      <div className="container ">
        <div className="row login-page">
          <div className="col col-lg-6 col-12 input-fields">
            <h2>Please Login: </h2> <br />
            <input type="email" name="email" placeholder="Your email" />
            <br />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Your password"
            />
            <br />
            <br />
            <input
              type="submit"
              value="Login"
              className="btn btn-primary pb-5"
            />
            <br />
            <Link to="/register" className="ms-2">
              <p className="underline"> New User ? Register Now ▸</p>
            </Link>
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
