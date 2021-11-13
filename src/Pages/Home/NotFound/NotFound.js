import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="notfound-404">
        <h1>404</h1>
        <p>Ｓ💔ＲＲＹ ＰＡＧＥ ＮＯＴ ＦＯＵＮＤ</p>
        <Link to="/home">
          <button className="yellow-btn">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
