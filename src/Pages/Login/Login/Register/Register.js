import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import registerIMG from "../../../../img/Banner-Background/register.png";
import Navbar from "../../../Shared/Navbar/Navbar";

const Register = () => {
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
            <h2>Register Now: </h2> <br />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
            /> <br /> <br />
            <input
              type="email"
              name="email"
              placeholder="Your email here"
            />{" "}
            <br /> <br />
            <input
              type="password"
              name="password"
              placeholder="Your email here"
            />{" "}
            <br /> <br />
            <input type="submit" value="Register" className="btn btn-primary" />
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
