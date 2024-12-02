import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/Banner";
import Freebook from "../components/freeBook";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;
