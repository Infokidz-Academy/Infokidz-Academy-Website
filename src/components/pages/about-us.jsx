import React from "react";
import "../../App.css";
import AboutDescription from "../about-us/aboutdescription";
import AboutValueProposition from "../about-us/aboutvalueproposition";
import Footer from "../footer";
import NavBar from "../navbar";
import { Helmet } from "react-helmet";

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>Infokidz About Us</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <NavBar />
      <AboutValueProposition />
      <AboutDescription />
      <Footer />
    </>
  );
}

export default AboutUs;
