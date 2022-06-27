import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import TutoringPrograms from "../programs/tutoringprograms";
import { Helmet } from "react-helmet";

function Programs() {
  return (
    <>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/programs" />
      </Helmet>
      <NavBar />
      <TutoringPrograms />
      <Footer />
    </>
  );
}

export default Programs;
