import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, cost, img, des, _id } = props.service;
  return (
    <div>
      <div className="spot-card">
        <img src={img} className="img-fluid" width="500" alt="" />
        <div className="spot-info">
          <p>
            Spot: <b>{name}</b>
          </p>
          <p>
            Cost: <b> ${cost}</b>
          </p>
          <p>
            Description: <b>{des}</b>
          </p>
        </div>
        <Link to={`/register`}>
          <button>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
