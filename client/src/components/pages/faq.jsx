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
        <title>Infokidz | Frequently Asked Questions</title>
        <meta
          name="description"
          content="Looking to improve your child’s reading/writing skills 
          or searching for a free try-out session at Infokidz? See FAQ for more information."
        />
        <link rel="canonical" href="/faq" />
      </Helmet>
      <NavBar />
      <Questions />
      <Footer />
    </HelmetProvider>
  );
}

export default FAQ;
