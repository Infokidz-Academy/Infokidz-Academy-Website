import React from "react";
import "../../App.css";
import ContactForm from "../contact/contactform";
import Footer from "../footer";
import NavBar from "../navbar";

function Contact() {
  return (
    <>
      <NavBar />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
