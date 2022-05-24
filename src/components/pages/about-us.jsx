import React from "react";
import "../../App.css";
import AboutDescription from "../about-us/aboutdescription";
import AboutValueProposition from "../about-us/aboutvalueproposition";
import Footer from "../footer";
import NavBar from "../navbar";

function AboutUs() {
  return (
    <>
      <NavBar />
      <AboutValueProposition />
      <AboutDescription />
      <Footer />
    </>
  );
}

export default AboutUs;
