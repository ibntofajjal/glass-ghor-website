import React from "react";
import "./GlassModels.css";
import Models from "../../../img/Banner-Background/model.png";
import { Link } from "react-router-dom";

const GlassModels = () => {
  return (
    <div>
      <div className="glasses-model-section mt-5 mb-5 ">
        <div className="container">
          <div className="glasses-model row">
            <div className="col col-lg-6 col-12 model-left">
              <img src={Models} width="600" className="img-fluid" alt="" />
            </div>
            <div className="col col-lg-6 col-12 model-right">
              <small>WE MAKE IT EASY TO YOU</small>
              <h1>
                Find Quality Eyeglasses & Sunglasses{" "}
                <u className="text-danger">Online</u>
              </h1>
              <hr />
              <p>
                Curabitur blandit tempus porttitor. Nulla vitae elit libero, a
                pharetra augue lorem upsum dolor site blandit tempus porttitor.
                Curabitur blandit tempus porttitornu. Vitae elit libero, a
                pharetra augue lorem upsum dolor site blandit tempus porttitor
                vitae elit libero, a pharetra augue lorem blandit tempus
              </p>
              <Link to="/glasses">
                <button className="btn btn-danger model-btn">
                  　　View Glasses　　
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassModels;
