import React from "react";
import "../../App.css";
import ContactForm from "../contact/contactform";
import Footer from "../footer";
import NavBar from "../navbar";
import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Infokidz</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <NavBar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
