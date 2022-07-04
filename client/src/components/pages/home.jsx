import React from "react";
import "../../App.css";
import Description from "../home/description";
import Footer from "../footer";
import Hero from "../home/hero";
import NavBar from "../navbar";
import ProgramsHome from "../home/programshome";
import TutoringApproach from "../home/tutoringapproach";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz Academy</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/" />
      </Helmet>
      <NavBar />
      <Hero />
      <Description />
      <ProgramsHome />
      <TutoringApproach />
      <Footer />
    </HelmetProvider>
  );
}

export default Home;
