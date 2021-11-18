import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import GlassModels from "../GlassModels/GlassModels";
import Header from "../Header/Header";
import Reviews from "../Reviews/Reviews";
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
      {/* Latest Glasses */}
      <Services></Services>
      {/* Reviews */}
      <Reviews></Reviews>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Home;
