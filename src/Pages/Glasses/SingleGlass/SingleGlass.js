import React from "react";
import { Link } from "react-router-dom";

const SingleGlass = (props) => {
  const { name, cost, img, des, _id } = props.singleGlass;
  return (
    <div>
      <div className="spot-card">
        <img src={img} className="img-fluid" width="500" alt="" />
        <div className="spot-info">
          <p>
            Name: <b>{name}</b>
          </p>
          <p>
            Price: <b> ${cost}</b>
          </p>
          <p>
            Description: <b>{des}</b>
          </p>
        </div>
        <Link to={`/buy/${_id}`}>
          <button>Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleGlass;
