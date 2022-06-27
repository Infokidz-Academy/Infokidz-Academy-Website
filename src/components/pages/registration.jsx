import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import RegistrationForm from "../registration/registrationform";
import { Helmet } from "react-helmet";

function Registration() {
  return (
    <>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/register" />
      </Helmet>
      <NavBar />
      <RegistrationForm />
      <Footer />
    </>
  );
}

export default Registration;
