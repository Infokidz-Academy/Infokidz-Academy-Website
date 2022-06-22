import React from "react";
import "../../App.css";
import Footer from "../footer";
import TutoringApproach from "../home/tutoringapproach";
import TutoringServices from "../how-infokidz-works/tutoringservices";
import NavBar from "../navbar";

function HowInfokidzWorks() {
  return (
    <>
      <NavBar />
      <TutoringApproach />
      <TutoringServices />
      <Footer />
    </>
  );
}

export default HowInfokidzWorks;
