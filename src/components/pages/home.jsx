import React from "react";
import "../../App.css";
import Description from "../home/description";
import Footer from "../footer";
import Hero from "../home/hero";
import NavBar from "../navbar";
import ProgramsHome from "../home/programshome";
import TutoringApproach from "../home/tutoringapproach";

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
