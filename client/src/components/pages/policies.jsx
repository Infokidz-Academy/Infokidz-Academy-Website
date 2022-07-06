import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import PrivacyPolicy from "../policies/privacypolicy";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Policies() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz Academy Canada</title>
        <link rel="canonical" href="/policies" />
      </Helmet>
      <NavBar />
      <PrivacyPolicy />
      <Footer />
    </HelmetProvider>
  );
}

export default Policies;
