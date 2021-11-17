import React, { useState } from "react";
import "./Glasses.css";
import { useEffect } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import SingleGlass from "../SingleGlass/SingleGlass";
// import SingleGlass from "../signleGlass/singleGlass";

const Glasses = () => {
  const [glasses, setGlasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/glassesCollection`)
      .then((res) => res.json())
      .then((data) => setGlasses(data));
  }, []);
  return (
    <div>
      {/* =========NAVBAR */}
      <Navbar></Navbar>
      {/* NAVBAR========= */}
      <div className="glass-section container">
        {glasses.map((singleGlass) => (
          <SingleGlass
            singleGlass={singleGlass}
            key={singleGlass._id}
          ></SingleGlass>
        ))}
      </div>
      {/* =========FOOTER */}
      <Footer></Footer>
      {/* FOOTER========= */}
    </div>
  );
};

export default Glasses;
