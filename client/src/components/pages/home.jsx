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
        <title>
          Infokidz | Math, English, Coding & App Design Courses for Kids
        </title>
        <meta
          name="description"
          content="Build your kids’ academic future with Infokidz online tutoring. 
          Learn Coding, App Development, and Math & English Language Arts."
        />
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
