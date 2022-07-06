import React from "react";
import "../../App.css";
import Footer from "../footer";
import TutoringApproach from "../home/tutoringapproach";
import TutoringServices from "../how-infokidz-works/tutoringservices";
import NavBar from "../navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

function HowInfokidzWorks() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz | Canadian Online Tutoring Center</title>
        <meta
          name="description"
          content="Infokidz academy provides affordable, 
        personalized, and small-grouped educational services for grade three to 12."
        />
        <link rel="canonical" href="/how-infokidz-works" />
      </Helmet>
      <NavBar />
      <TutoringApproach />
      <TutoringServices />
      <Footer />
    </HelmetProvider>
  );
}

export default HowInfokidzWorks;
