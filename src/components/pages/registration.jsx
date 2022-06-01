import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import RegistrationForm from "../registration/registrationform";

function Registration() {
  return (
    <>
      <NavBar />
      <RegistrationForm />
      <Footer />
    </>
  );
}

export default Registration;
