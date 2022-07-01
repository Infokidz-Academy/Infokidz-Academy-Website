import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import RegistrationForm from "../registration/registrationform";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Registration() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/register" />
      </Helmet>
      <NavBar />
      <RegistrationForm />
      <Footer />
    </HelmetProvider>
  );
}

export default Registration;
