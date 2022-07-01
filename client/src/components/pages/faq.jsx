import React from "react";
import "../../App.css";
import Questions from "../faq/questions";
import Footer from "../footer";
import NavBar from "../navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";

function FAQ() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/faq" />
      </Helmet>
      <NavBar />
      <Questions />
      <Footer />
    </HelmetProvider>
  );
}

export default FAQ;
