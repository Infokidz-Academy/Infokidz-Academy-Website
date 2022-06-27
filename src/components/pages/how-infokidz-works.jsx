import React from "react";
import "../../App.css";
import Footer from "../footer";
import TutoringApproach from "../home/tutoringapproach";
import TutoringServices from "../how-infokidz-works/tutoringservices";
import NavBar from "../navbar";
import { Helmet } from "react-helmet";

function HowInfokidzWorks() {
  return (
    <>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/how-infokidz-works" />
      </Helmet>
      <NavBar />
      <TutoringApproach />
      <TutoringServices />
      <Footer />
    </>
  );
}

export default HowInfokidzWorks;
