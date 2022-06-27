import React from "react";
import "../../App.css";
import Questions from "../faq/questions";
import Footer from "../footer";
import NavBar from "../navbar";
import { Helmet } from "react-helmet";

function FAQ() {
  return (
    <>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/faq" />
      </Helmet>
      <NavBar />
      <Questions />
      <Footer />
    </>
  );
}

export default FAQ;
