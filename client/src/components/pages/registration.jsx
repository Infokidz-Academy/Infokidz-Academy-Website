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
        <title>Register for a FREE try-out session</title>
        <meta
          name="description"
          content="Register for Math and English lessons for 
          long-term support or last-minute help at Infokidz academy for grades 3-12"
        />
        <link rel="canonical" href="/register" />
      </Helmet>
      <NavBar />
      <RegistrationForm />
      <Footer />
    </HelmetProvider>
  );
}

export default Registration;
