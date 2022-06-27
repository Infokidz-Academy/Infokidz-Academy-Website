import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import PrivacyPolicy from "../policies/privacypolicy";
import { Helmet } from "react-helmet";

function Policies() {
  return (
    <>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/policies" />
      </Helmet>
      <NavBar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default Policies;
