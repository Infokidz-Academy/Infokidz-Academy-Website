import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import PrivacyPolicy from "../policies/privacy-policy";

function Policies() {
  return (
    <>
      <NavBar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default Policies;
