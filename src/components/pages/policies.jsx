import React from "react";
import "../../App.css";
import Footer from "../footer";
import NavBar from "../navbar";
import PrivacyPolicy from "../policies/privacypolicy";

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
