import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import LoginImg from "../../../img/Banner-Background/login.png";
import "./Login.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  // UseState For Change the Login State
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, authError, isLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();

  // Handle OnChange For Input Field
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(field, value);
  };

  // Handle Submit button
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <div>
      {/* NAVBAR============= */}
      <Navbar></Navbar>
      {/* =============NAVBAR */}

      <div className="container ">
        <div className="row login-page">
          <div className="col col-lg-6 col-12 input-fields">
            <h2>Please Login: </h2> <br />
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onChange={handleOnChange}
                />
                <br />
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  onChange={handleOnChange}
                />
                <br />
                <br />
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary pb-5"
                />
              </form>
            )}
            {isLoading && (
              <div className="ms-5">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}{" "}
            <br />
            {user?.email && (
              <div className="alert alert-success" role="alert">
                Successfully Login
              </div>
            )}
            {authError && (
              <div className="alert alert-danger" role="alert">
                {authError}
              </div>
            )}
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
