import React from "react";
import "../../App.css";
import AboutDescription from "../about-us/aboutdescription";
import AboutValueProposition from "../about-us/aboutvalueproposition";
import Footer from "../footer";
import NavBar from "../navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

function AboutUs() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz | Canadian After school Learning Resources</title>
        <meta
          name="description"
          content="Infokidz Academy is a Canadian after-school 
        educational institute for Math and English tutoring."
        />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <NavBar />
      <AboutValueProposition />
      <AboutDescription />
      <Footer />
    </HelmetProvider>
  );
}

export default AboutUs;
