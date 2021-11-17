import React, { useState } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import registerIMG from "../../../../img/Banner-Background/register.png";
import Navbar from "../../../Shared/Navbar/Navbar";
import useAuth from "../../../../hooks/useAuth";

const Register = () => {
  // UseState For Change the Login State
  const [loginData, setLoginData] = useState({});
  const { user, authError, registerUser, isLoading } = useAuth();

  const history = useHistory();

  // Handle onBlur For Input Field
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  // Handle Submit button
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.confirmPassword) {
      alert("Password Did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div>
      {/* NAVBAR============= */}
      <Navbar></Navbar>
      {/* =============NAVBAR */}

      <div className="container mt-5 mb-5">
        <div className="row register-page">
          <div className="col col-lg-6 col-12">
            <img src={registerIMG} className="img-fluid" alt="" />
          </div>
          <div className="col col-lg-6 col-12 input-fields">
            <h2 className="mt-3">Register Now:</h2> <br />
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onBlur={handleOnBlur}
                />
                <br /> <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onBlur={handleOnBlur}
                />
                <br /> <br />
                <input
                  type="password"
                  name="password"
                  placeholder="New Password"
                  onBlur={handleOnBlur}
                />
                <br /> <br />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Your Password"
                  onBlur={handleOnBlur}
                />
                <br /> <br />
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary pb-5"
                />
              </form>
            )}
            <br />
            {isLoading && (
              <div className="ms-5">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {user?.email && (
              <div className="alert alert-success" role="alert">
                Successfully Registered
              </div>
            )}
            {authError && (
              <div className="alert alert-danger" role="alert">
                {authError}
              </div>
            )}
            <br />
            <Link to="/login" className="ms-2">
              <p className="underline"> Already User ? Login Now ▸</p>
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER============= */}
      <Footer></Footer>
      {/* =============FOOTER */}
    </div>
  );
};

export default Register;
