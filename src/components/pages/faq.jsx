import React from "react";
import "../../App.css";
import Questions from "../faq/questions";
import Footer from "../footer";
import NavBar from "../navbar";

function FAQ() {
  return (
    <>
      <NavBar />
      <Questions />
      <Footer />
    </>
  );
}

export default FAQ;
