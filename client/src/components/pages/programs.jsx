import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import TutoringPrograms from "../programs/tutoringprograms";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Programs() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Reading, Writing, Math K-12 Tutor Near Me</title>
        <meta
          name="description"
          content="Infokidz offers math, english, coding, and app development. 
          Programs, aligned with the Canadian curriculum, are taught by the best tutors."
        />
        <link rel="canonical" href="/programs" />
      </Helmet>
      <NavBar />
      <TutoringPrograms />
      <Footer />
    </HelmetProvider>
  );
}

export default Programs;
