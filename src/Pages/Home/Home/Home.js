import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import GlassModels from "../GlassModels/GlassModels";
import Header from "../Header/Header";
import Services from "../Services/Services/Services";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Header */}
      <Header></Header>
      {/* GlassesModel */}
      <GlassModels></GlassModels>
      {/* GlassesModel */}
      <Services></Services>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
