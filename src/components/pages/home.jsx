import React from "react";
import "../../App.css";
import Description from "../description";
import Footer from "../footer";
import Hero from "../hero";
import NavBar from "../navbar";
import ProgramsHome from "../programshome";
import TutoringApproach from "../tutoringapproach";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Description />
      <ProgramsHome />
      <TutoringApproach />
      <Footer />
    </>
  );
}

export default Home;
